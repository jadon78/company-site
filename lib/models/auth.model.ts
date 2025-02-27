import mongoose from "mongoose";

export const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    provider: {
      type: String,
      enum: ["google", "credentials"],
      default: "credentials",
    },
    emailVerified: {
      type: Date,
    },
    isTwoFactorEnabled: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);

const verificationTokenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});

const VerificationToken =
  mongoose.models?.VerificationToken ||
  mongoose.model("VerificationToken", verificationTokenSchema);

const passwordResetTokenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});

const PasswordResetToken =
  mongoose.models?.PasswordResetToken ||
  mongoose.model("PasswordResetToken", passwordResetTokenSchema);

const twoFactorTokenSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    unique: true,
    required: true,
  },
  expires: {
    type: Date,
    required: true,
  },
});

const TwoFactorToken =
  mongoose.models?.TwoFactorToken ||
  mongoose.model("TwoFactorToken", twoFactorTokenSchema);

export const twoFactorConfirmationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    unique: true,
    required: true,
  },
});

const TwoFactorConfirmation =
  mongoose.models?.TwoFactorConfirmation ||
  mongoose.model("TwoFactorConfirmation", twoFactorConfirmationSchema);

export const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile_number: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 12,
  },
  message: {
    type: String,
  },
});

const Enquiry =
  mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);

export const getInTouchSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 12,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: false,
  },
});

const GetInTouch =
  mongoose.models.GetInTouch || mongoose.model("GetInTouch", getInTouchSchema);

export const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  blogDescription: {
    type: String,
    required: false,
  },
  file: {
    type: String,
    required: false,
  },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export {
  User,
  VerificationToken,
  PasswordResetToken,
  TwoFactorToken,
  TwoFactorConfirmation,
  Enquiry,
  GetInTouch,
  Blog,
};
