import { createContext, useState } from 'react'

import { BusinessInterface } from '@ts/business'

export interface BusinessContextInterface {
  business: BusinessInterface
  setBusiness: (business: BusinessInterface) => void
}

interface BusinessContextProviderInterface {
  children: React.ReactNode
  business: BusinessInterface
}

const BusinessContext = createContext<BusinessContextInterface | null>(null)

export const BusinessProvider = ({
  children,
  business: b,
}: BusinessContextProviderInterface) => {
  const [business, setBusiness] = useState<BusinessInterface>(b)
  return (
    <BusinessContext.Provider value={{ business, setBusiness }}>
      {children}
    </BusinessContext.Provider>
  )
}

export default BusinessContext
