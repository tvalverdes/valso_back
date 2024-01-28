import { Request, Response } from 'express'
import { vehicleRecords } from '../schemas/vehicle.schema'


export const createVehicleForm = async (req: Request, res: Response) => {
  try {
    const rawData = req.body.data
    const data = JSON.parse(rawData)
    const imageBuffer = req.file?.buffer
    if (data.vehicleData && imageBuffer) {
      data.vehicleData.vehicleImage = imageBuffer
    }
    await vehicleRecords.create({ data })
    res.status(201).send({ message: 'Registrado exitosamente' })

  } catch (err) {
    console.log(err)
    res.send(err)
  }
}