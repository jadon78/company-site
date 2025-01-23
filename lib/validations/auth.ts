import * as z from "zod";
import { UserRole } from "@/lib/models/types";

export const SignInValidation = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be 8+ characters"),
  code: z.optional(z.string()),
});

export const SignUpValidation = z
  .object({
    name: z
      .string()
      .min(1, "Fullname is required")
      .max(50, "fullname must be less than 50 characters"),
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be 8+ characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
    companyName: z.optional(z.string()),
    phone: z.number().min(1, "Phone Number is required"),
    role: z.enum([UserRole.ADMIN, UserRole.USER, UserRole.FREELANCERHR]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

export const EnqiryValidation = z.object({
  name: z
    .string()
    .min(1, "Fullname is required")
    .max(50, "fullname must be less than 50 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  mobile_number: z.number().min(1, "Phone Number is required"),
  message: z.optional(z.string()),
});

export const GetInTouchValidation = z.object({
  fullName: z
    .string()
    .min(1, "Fullname is required")
    .max(50, "fullname must be less than 50 characters"),
  company: z
    .string()
    .min(1, "Fullname is required")
    .max(50, "fullname must be less than 50 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  mobile: z.number().min(1, "Phone Number is required"),
  projectDescription: z.optional(z.string()),
  file: z.optional(z.string()),
});

export const BlogValidation = z.object({
  title: z.string(),
  blogDescription:  z.optional(z.string()),
  file: z.optional(z.string()),

});

export const ResetPasswordValidation = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
});

export const NewPasswordValidation = z
  .object({
    newPassword: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must be 8+ characters"),
    confirmPassword: z.string().min(1, "Password confirmation is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password do not match",
  });

const validatePassword = z
  .string()
  .refine((val) => val === "" || val.length >= 8, {
    message: "Password must be 8+ characters if provided",
  });

export const SettingsValidation = z
  .object({
    name: z.optional(z.string()),
    email: z.optional(z.string().email("Invalid email")),
    password: z.optional(validatePassword),
    newPassword: z.optional(validatePassword),
    role: z.enum([UserRole.ADMIN, UserRole.USER]),
    isTwoFactorEnabled: z.optional(z.boolean()),
  })
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }
      return true;
    },
    {
      path: ["password"],
      message: "To change password, enter current one.",
    }
  )
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }
      return true;
    },
    {
      path: ["newPassword"],
      message: "To change password, enter new password.",
    }
  );
