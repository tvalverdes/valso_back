import { configDotenv } from 'dotenv'

configDotenv()

export const DB_URI = process.env.DB_URI || ''
export const CORS_URL = process.env.CORS_URL || ''

