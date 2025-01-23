"use server";

import { z } from "zod";
import connectDB from "@/lib/db";
import { GetInTouch } from "@/lib/models/auth.model";
import { GetInTouchValidation } from "@/lib/validations/auth";

type GetInTouchCredentialInput = z.infer<typeof GetInTouchValidation>;

export const GetInTouchCredentials = async (
  values: GetInTouchCredentialInput
) => {
  const validatedFields = GetInTouchValidation.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { fullName, company, email, mobile, projectDescription, file } =
    validatedFields.data;

  await connectDB();
  const user = new GetInTouch({
    fullName,
    company,
    email,
    mobile,
    projectDescription,
    file,
  });
  await user.save();
  return { success: "successfully sent project" };
};
