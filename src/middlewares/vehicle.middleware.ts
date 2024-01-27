import { NextFunction, Request, Response } from 'express'
import { body, validationResult } from 'express-validator'

const validationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) {
    return next()
  }

  return res.status(400).json({ errors: errors.array() })
}

export const verifyVehicleForm = (data) => {
  return [
    body('data.personalData.name').isString().notEmpty(),
    body('data.personalData.documentType').isString().notEmpty(),
    body('data.personalData.documentNumber').isString().notEmpty(),
    body('data.personalData.driversLicenseType').isString().notEmpty(),
    body('data.personalData.phone').isString().notEmpty(),

    body('data.vehicleData.location').isString().notEmpty(),
    body('data.vehicleData.brand').isString().notEmpty(),
    body('data.vehicleData.is4x4').isBoolean(),
    body('data.vehicleData.model').isString().notEmpty(),
    body('data.vehicleData.fabricationYear').isInt(),
    body('data.vehicleData.vehicleType').isString().notEmpty(),
    body('data.vehicleData.comment').isString(),
    body('data.vehicleData.vehicleImage').isString(),
    validationMiddleware
  ]
}

