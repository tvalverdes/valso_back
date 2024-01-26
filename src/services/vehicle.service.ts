import { Request, Response } from 'express'
import { vehicleRecords } from '../schemas/vehicle.schema'
import { VehicleForm } from '../types/types'


export const createVehicleForm = async (req: Request, res: Response) => {
  try {
    const data = req.body as VehicleForm
    const result = await vehicleRecords.create(data)
    res.send(result)

  } catch (err) {
    console.log(err)
    res.send(err)
  }
}