import type { NextApiRequest, NextApiResponse } from 'next'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let revalidated = false
  try {
    await res.unstable_revalidate('/')
    revalidated = true
  } catch (e) {
    console.log(e)
  }
  res.json({
    revalidated,
  })
}
