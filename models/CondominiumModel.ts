import mongoose, { Schema, Document } from "mongoose";

export interface ICondominium extends Document {
  name: string;
  address: string;
  city: string;
  postalCode: string;
  units: number; // numero appartamenti
  admin: mongoose.Types.ObjectId; // amministratore principale
  createdAt: Date;
  updatedAt: Date;
}

const CondominiumSchema = new Schema<ICondominium>(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: { type: String, required: true },
    units: { type: Number, required: true, min: 1 },
    admin: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model<ICondominium>("Condominium", CondominiumSchema);
