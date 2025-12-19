import mongoose, { Schema, Document } from "mongoose";

export type UserRole = "ADMIN" | "RESIDENT" | "TECHNICIAN";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
  condominium?: mongoose.Types.ObjectId;
  apartmentNumber?: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["ADMIN", "RESIDENT", "TECHNICIAN"],
      default: "RESIDENT",
    },

    condominium: {
      type: Schema.Types.ObjectId,
      ref: "Condominium",
    },

    apartmentNumber: { type: String },

    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
