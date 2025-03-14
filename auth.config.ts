import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

import { SignInValidation } from "@/lib/validations/auth";
import { fetchUserByEmail, fetchUserById, signInWithOauth } from "@/lib/api-handler/user";
import { fetchConfirmationByUserId, deleteConfirmationById } from "@/lib/api-handler/twofac";
import { UserRole } from "@/lib/models/types";

export default {
  session: { strategy: "jwt" },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/signin", // app/signin
    error: "/error", // app/error
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInValidation.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          let existingUser = await fetchUserByEmail(email);
          if (!existingUser || !existingUser.password) return null;

          const passwordsMatch = await bcrypt.compare(password, existingUser.password);
          existingUser.password = "";

          if (passwordsMatch) return existingUser;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (account && account?.provider !== "credentials" && profile) {
        return await signInWithOauth({ account, profile });
      }

      if (account?.provider === "credentials" && user._id) {
        const existingUser = await fetchUserById(user._id);

        if (!existingUser?.emailVerified) return false;

        if (existingUser?.isTwoFactorEnabled) {
          const twoFactorConfirmation = await fetchConfirmationByUserId(existingUser._id);
          if (!twoFactorConfirmation) return false;

          await deleteConfirmationById(twoFactorConfirmation._id);
        }
      }

      return true;
    },
    async jwt({ token }) {
      console.log("JWT Callback - Token:", token); // Log the token
      if (!token.email) return token;

      const existingUser = await fetchUserByEmail(token.email);
      if (!existingUser) return token;

      token._id = existingUser._id;
      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.provider = existingUser.provider;
      token.isTwoFactorEnabled = existingUser.isTwoFactorEnabled;

      return token;
    },
    async session({ session, token }: any) {
      console.log("Session Callback - Token:", token); // Log the token
      if (token._id && session.user) {
        session.user._id = token._id as string;
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.role = token.role as UserRole;
        session.user.provider = token.provider as string;
        session.user.isTwoFactorEnabled = token.isTwoFactorEnabled as boolean;
      }

      return session;
    },
  },
} satisfies NextAuthConfig;
