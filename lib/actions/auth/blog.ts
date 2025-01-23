"use server";

import { z } from "zod";
import connectDB from "@/lib/db";
import { Blog } from "@/lib/models/auth.model";
import { BlogValidation } from "@/lib/validations/auth";

type BlogCredentialInput = z.infer<typeof BlogValidation>;

export const BlogCredentials = async (values: BlogCredentialInput) => {
  const validatedFields = BlogValidation.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { title, blogDescription, file } = validatedFields.data;

  await connectDB();
  const user = new Blog({ title, blogDescription, file });
  await user.save();
  return { success: "successfully_register" };
};
