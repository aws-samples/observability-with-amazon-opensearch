import type { NextApiRequest, NextApiResponse } from 'next'
import dotenv from 'dotenv'

dotenv.config()

type Data = {
  oltp: string
  recommend: string
  logs: string
  order: string
  inventory: string
  payment: string
  auth: string
  sqlhost: string
  sqlport: string
  time: string
}

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    oltp: process.env.OLTP || 'not found',
    recommend: process.env.RECOMMEND || 'not found',
    logs: process.env.LOGS || 'not found',
    order: process.env.ORDER || 'not found',
    inventory: process.env.INVENTORY || 'not found',
    payment: process.env.PAYMENT || 'not found',
    auth: process.env.AUTH || 'not found',
    sqlhost: process.env.MYSQL_HOST|| 'not found',
    sqlport: process.env.MYSQL_PORT || 'not found',
    time: new Date().toISOString()
  })
}