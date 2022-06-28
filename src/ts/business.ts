export interface ShortBusinessInterface {
  id: number
  name: string
  segment: string
  slug: string
  logo: string
}

export interface BusinessInterface {
  id: number
  name: string
  segment: string
  slug: string
  logo: string
  description: string
  address: string
  contact: {
    phone: string
    email: string
  }
  social: {
    website: string
    facebook: string
    twitter: string
    instagram: string
    youtube: string
    linkedin: string
  }
  employees: {
    min: number
    max: number
  }
  valuation: {
    min: number
    max: number
  }
  founded_at: string
  growth: number
  model: string
  series?: string
}
