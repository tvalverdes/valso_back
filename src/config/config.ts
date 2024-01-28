import { configDotenv } from 'dotenv'

configDotenv()

export const DB_URI = process.env.DB_URI || ''
export const CORS_URL = process.env.CORS_URL || ''
export const EMAIL = process.env.EMAIL || ''
export const PASSWORD = process.env.PASSWORD || ''
export const MAIL_HOST = process.env.MAIL_HOST || ''
export const MAIL_PRINCIPAL_RECEIVER = process.env.MAIL_PRINCIPAL_RECEIVER || ''
export const MAIL_SECONDARY_RECEIVER = process.env.MAIL_SECONDARY_RECEIVER || ''

