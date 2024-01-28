export interface VehicleForm {
  data: {
    personalData: PersonalData
    vehicleData: VehicleData
  }
}

export type PersonalData = {
  name: string
  documentType: string
  documentNumber: string
  driversLicenseType: string
  phone: string
}

export type VehicleData = {
  location: string
  brand: string
  is4x4: boolean
  model: string
  fabricationYear: number
  vehicleType: string
  comment?: string
  vehicleImage?: File
}