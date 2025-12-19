import mongoose, { Schema, Document } from "mongoose";
import { ref } from "node:process";

export interface ICommunication extends Document {
  title: string;
  message: string;
  condominium: mongoose.Types.ObjectId;
  author: mongoose.Types.ObjectId;
  important: boolean;
  attachments?: mongoose.Types.ObjectId[];
  createdAt: Date;
}

const CommunicationSchema = new Schema<ICommunication>(
  {
    title: { type: String, required: true },
    message: { type: String, required: true },
    condominium: {
      type: Schema.Types.ObjectId,
      ref: "Condominium",
      required: true,
    },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    important: { type: Boolean, default: false },
    attachments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Document",
      },
    ],
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model<ICommunication>(
  "Communication",
  CommunicationSchema
);
