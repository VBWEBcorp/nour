import mongoose, { Schema, Document } from 'mongoose'

export interface IApplication extends Document {
  offerTitle: string
  offerCompany?: string
  firstName: string
  lastName: string
  email: string
  phone?: string
  message?: string
  cvUrl: string
  cvName: string
  lettreUrl?: string
  lettreName?: string
  status: 'new' | 'reviewed' | 'archived'
  createdAt: Date
  updatedAt: Date
}

const ApplicationSchema = new Schema<IApplication>(
  {
    offerTitle: { type: String, required: true },
    offerCompany: String,
    firstName: { type: String, required: [true, 'Prénom requis'] },
    lastName: { type: String, required: [true, 'Nom requis'] },
    email: { type: String, required: [true, 'Email requis'] },
    phone: String,
    message: String,
    cvUrl: { type: String, required: [true, 'CV requis'] },
    cvName: { type: String, required: true },
    lettreUrl: String,
    lettreName: String,
    status: {
      type: String,
      enum: ['new', 'reviewed', 'archived'],
      default: 'new',
    },
  },
  {
    timestamps: true,
  }
)

export const Application =
  mongoose.models.Application ||
  mongoose.model<IApplication>('Application', ApplicationSchema)
