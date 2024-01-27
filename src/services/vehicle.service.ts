import { Request, Response } from 'express'
import { VehicleForm } from '../types/types'


export const createVehicleForm = async (req: Request, res: Response) => {
  try {
    const data = req.body as VehicleForm
    console.log(data)
    /* const result = await vehicleRecords.create(data)
    res.send(result) */

  } catch (err) {
    console.log(err)
    res.send(err)
  }
}