import { connect } from 'mongoose'
import { DB_URI } from './config'

export const dbConnection = async () => {
  await connect(DB_URI)
    .then(() => console.log('DB is connected'))
    .catch((err) => console.log(err))
}