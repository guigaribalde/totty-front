import type { NextApiRequest, NextApiResponse } from 'next'
import { business } from '@lib/business'
type Data = {
  name: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  business.get({})
  res.status(200).json({ name: 'John Doe' })
}
