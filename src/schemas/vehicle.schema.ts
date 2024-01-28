import { Schema, model } from 'mongoose'
import { VehicleForm } from '../types/types'

const vehicleFormSchema = new Schema<VehicleForm>({
  data: {
    personalData: {
      name: { type: String, required: true },
      documentType: { type: String, required: true },
      documentNumber: { type: String, required: true },
      driversLicenseType: { type: String, required: true },
      phone: { type: String, required: true }
    },
    vehicleData: {
      location: { type: String, required: true },
      brand: { type: String, required: true },
      is4x4: { type: Boolean, required: true },
      model: { type: String, required: true },
      fabricationYear: { type: Number, required: true },
      vehicleType: { type: String, required: true },
      comment: { type: String },
      vehicleImage: { type: Buffer }
    }
  }
})

export const vehicleRecords = model<VehicleForm>('vehicleRecords', vehicleFormSchema)