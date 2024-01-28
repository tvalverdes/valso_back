import cors from 'cors'
import express from 'express'
import { CORS_URL } from './config/config'
import { dbConnection } from './config/dbConnection'
import vehicleRouter from './controllers/vehicle.controller'
const app = express()
const port = 4000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: CORS_URL, credentials: true }))
app.use('/vehicles', vehicleRouter)
dbConnection()
  .then(() => app.listen(port, () => console.log(`Example app listening on port ${port}!`)))
  .catch((err) => console.log(err))

