import mongoose, { Schema, Document } from "mongoose";

export interface IService extends Document {
  name: string;
  description?: string;
  condominium: mongoose.Types.ObjectId;
  provider?: string;
  active: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ServiceSchema = new Schema<IService>(
  {
    name: { type: String, required: true },
    description: { type: String },
    condominium: {
      type: Schema.Types.ObjectId,
      ref: "Condominium",
      required: true,
    },
    provider: { type: String },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IService>("Service", ServiceSchema);
