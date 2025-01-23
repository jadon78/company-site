"use server";

import { z } from "zod";
import connectDB from "@/lib/db";
import { Enquiry } from "@/lib/models/auth.model";
import { EnqiryValidation } from "@/lib/validations/auth";

type EnquiryCredentialInput = z.infer<typeof EnqiryValidation>;

export const EnquiryCredentials = async (values: EnquiryCredentialInput) => {
  const validatedFields = EnqiryValidation.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { name, email, mobile_number, message } = validatedFields.data;

  await connectDB();
  const user = new Enquiry({ name, email, mobile_number, message });
  await user.save();
  return { success: "successfully_register" };
};
