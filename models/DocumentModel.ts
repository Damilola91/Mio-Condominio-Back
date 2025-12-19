import mongoose, { Schema, Document } from "mongoose";

export type DocumentType =
  | "DELIBERA"
  | "VERBALE"
  | "REGOLAMENTO"
  | "BILANCIO"
  | "COMUNICAZIONE";

export interface IDocument extends Document {
  title: string;
  description?: string;
  fileUrl: string;
  fileName: string;
  fileType: "pdf" | "doc" | "docx";
  documentType: DocumentType;
  condominium: mongoose.Types.ObjectId;
  uploadedBy: mongoose.Types.ObjectId;
  relatedCommunication?: mongoose.Types.ObjectId;
  createdAt: Date;
}

const DocumentSchema = new Schema<IDocument>(
  {
    title: { type: String, required: true },
    description: { type: String },

    fileUrl: { type: String, required: true },
    fileName: { type: String, required: true },

    fileType: {
      type: String,
      enum: ["pdf", "doc", "docx"],
      required: true,
    },

    documentType: {
      type: String,
      enum: ["DELIBERA", "VERBALE", "REGOLAMENTO", "BILANCIO", "COMUNICAZIONE"],
      required: true,
    },

    condominium: {
      type: Schema.Types.ObjectId,
      ref: "Condominium",
      required: true,
    },

    uploadedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    relatedCommunication: {
      type: Schema.Types.ObjectId,
      ref: "Communication",
    },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export default mongoose.model<IDocument>("Document", DocumentSchema);
