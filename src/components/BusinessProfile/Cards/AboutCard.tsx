import { Box, Text } from '@chakra-ui/react'
import { useBusiness } from '@hooks/useBusiness'

import MenuCard from '@components/MenuCard'

export default function AboutCard() {
  const { business } = useBusiness()
  return (
    <MenuCard title="Sobre">
      <Box mt="5">
        <Text fontWeight="semibold">Fundado em</Text>
        <Text>{business.founded_at}</Text>
      </Box>
      <Box mt="5">
        <Text fontWeight="semibold">Sediado em</Text>
        <Text>{business.address}</Text>
      </Box>
    </MenuCard>
  )
}
