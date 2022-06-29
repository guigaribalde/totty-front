import { useContext } from 'react'
import BusinessContext, {
  BusinessContextInterface,
} from '@context/BusinessContext'

export const useBusiness = () => {
  const { business, setBusiness } = useContext(
    BusinessContext
  ) as BusinessContextInterface
  return { business, setBusiness }
}
