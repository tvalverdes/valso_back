import nodemailer from 'nodemailer'
import { EMAIL, MAIL_HOST, MAIL_PRINCIPAL_RECEIVER, MAIL_SECONDARY_RECEIVER, PASSWORD } from '../config/config'
import { VehicleForm } from '../types/types'

export const sendMail = async (data: VehicleForm) => {
  const vehicleImage = data.data.vehicleData.vehicleImage
  const attachment = vehicleImage ? { filename: 'imagen.jpg', content: vehicleImage } : {}
  const config = {
    host: MAIL_HOST,
    auth: {
      user: EMAIL,
      pass: PASSWORD
    },
    port: 587,
    secure: false,
  }
  const mensaje = {
    from: EMAIL,
    to: [MAIL_PRINCIPAL_RECEIVER, MAIL_SECONDARY_RECEIVER],
    subject: 'Nuevo registro desde Transportes Valso',
    text: `Nuevo formulario de registro:
    Dueño del vehículo:
      1. Nombre: ${data.data.personalData.name}
      2. Tipo de documento: ${data.data.personalData.documentType}
      3. Número de documento: ${data.data.personalData.documentNumber}
      4. Tipo de licencia: ${data.data.personalData.driversLicenseType}
      5. Teléfono: ${data.data.personalData.phone}
    Datos del vehículo:
      1. Ubicación: ${data.data.vehicleData.location}
      2. Marca: ${data.data.vehicleData.brand}
      3. Es 4x4: ${data.data.vehicleData.is4x4 ? 'Si' : 'No'}
      4. Modelo: ${data.data.vehicleData.model}
      5. Año de fabricación: ${data.data.vehicleData.fabricationYear}
      6. Tipo de vehículo: ${data.data.vehicleData.vehicleType}
      7. Comentario: ${data.data.vehicleData.comment}`,
    ...(vehicleImage ? { attachments: [attachment] } : {})
  }
  const transport = nodemailer.createTransport(config)
  await transport.sendMail(mensaje)
}