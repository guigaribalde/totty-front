import { createContext, useState } from 'react'
import { BusinessExtended } from '@ts/business'

export interface BusinessContextInterface {
  business: BusinessExtended
  setBusiness: (business: BusinessExtended) => void
}

interface BusinessContextProviderInterface {
  children: React.ReactNode
  business: BusinessExtended
}

const BusinessContext = createContext<BusinessContextInterface | null>(null)

export const BusinessProvider = ({
  children,
  business: b,
}: BusinessContextProviderInterface) => {
  const [business, setBusiness] = useState<BusinessExtended>(b)
  return (
    <BusinessContext.Provider value={{ business, setBusiness }}>
      {children}
    </BusinessContext.Provider>
  )
}

export default BusinessContext
