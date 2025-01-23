import { Document } from "mongoose"

export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  FREELANCERHR="freelancer"
}

export enum UserProvider {
  GOOGLE = "google",
  CREDENTIALS = "credentials"
}


export interface IUser extends Document {
  name: string
  companyName:string
  phone:number
  email: string
  password?: string
  image?: string
  role: UserRole
  provider: UserProvider
  emailVerified: Date
  isTwoFactorEnabled: boolean
  createdAt: Date
  updatedAt: Date
}