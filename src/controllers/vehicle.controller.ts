import { Router } from 'express'
import { createVehicleForm } from '../services/vehicle.service'

const router = Router()

router.get('/', (req, res) => {
  res.send('<p>Holasssasdasds</p>')
})
router.post('/', createVehicleForm)

export default router
