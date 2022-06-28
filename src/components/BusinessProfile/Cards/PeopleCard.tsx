import { Box, Text } from '@chakra-ui/react'

import MenuCard from '@components/MenuCard'
import { useBusiness } from '@hooks/useBusiness'

export default function PeopleCard() {
  const { business } = useBusiness()
  return (
    <MenuCard title="Pessoas">
      <Box mt="5">
        <Text fontWeight="semibold">Fundadores</Text>
        <Text>
          {business.people.founders.map((founder, index) => {
            if (index > 0) return `, ${founder.name}`
            return founder.name
          })}
        </Text>
      </Box>
      <Box mt="5">
        <Text fontWeight="semibold">Investidores</Text>
        <Text>
          {business.people.investors.map((investor, index) => {
            if (index > 0) return `, ${investor.name}`
            return investor.name
          })}
        </Text>
      </Box>
      <Box mt="5">
        <Text fontWeight="semibold">Executivos</Text>
        <Text>
          {business.people.executives.map((executive, index) => {
            if (index > 0) return `, ${executive.name}`
            return executive.name
          })}
        </Text>
      </Box>
    </MenuCard>
  )
}
