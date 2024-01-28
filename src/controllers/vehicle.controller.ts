import { Router } from 'express'
import { createVehicleForm } from '../services/vehicle.service'
import { multerMiddleware } from '../middlewares/multer.middleware'

const router = Router()

router.post('/', multerMiddleware, createVehicleForm)

export default router
