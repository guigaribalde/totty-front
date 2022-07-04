import type { NextApiRequest, NextApiResponse } from 'next'
import { business } from '@lib/business'
type Data = {
  message?: string
  name?: string
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  business.get({})
  if (req.method === 'POST') {
    business.create({
      name: 'Creatus2',
      segment: 'Tecnologia',
      slug: 'creatus2',
      logo: 'https://lh4.googleusercontent.com/-fp0jtrGtaoY/AAAAAAAAAAI/AAAAAAAAAAA/bsWagg4awvM/s88-p-k-no-ns-nd/photo.jpg',
      description:
        'A empresa Creatus é uma empresa de tecnologia que tem como objetivo principal a criação de soluções para a indústria de automação e robótica.',
      address: 'Rua dos Bobos, 0',
      contact: {
        create: {
          email: 'contato@creatusdev.com',
          phone: '11 99999-9999',
        },
      },
      social: {
        create: {
          website: 'http://www.example.com',
          facebook: 'http://www.facebook.com',
          twitter: 'http://www.twitter.com',
          instagram: 'http://www.instagram.com',
          youtube: 'http://www.youtube.com',
          linkedin: 'http://www.linkedin.com',
        },
      },
      employees: {
        create: {
          max: 200,
          min: 100,
        },
      },
      valuation: 100000,
      people: {
        create: {
          founders: {
            create: {
              name: 'John Doe',
              linkedin: 'http://www.linkedin.com',
            },
          },
          executives: {
            create: {
              name: 'John Doe',
              linkedin: 'http://www.linkedin.com',
            },
          },
          investors: {
            create: {
              name: 'John Doe',
              linkedin: 'http://www.linkedin.com',
            },
          },
        },
      },
      founded_at: '23/11/2001',
      growth: 2.3,
      model: 'B2B',
    })
    return res.status(201).json({ message: 'Business Created' })
  } else if (req.method === 'GET') {
    return res.status(200).json({ name: 'John Doe' })
  }
  return res.status(405).json({ message: 'Method not allowed' })
}
