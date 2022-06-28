import { Box, Text } from '@chakra-ui/react'

import BusinessProfileNav from '@components/BusinessProfile/Nav/BusinessProfileNav'
import AboutCard from '@components/BusinessProfile/Cards/AboutCard'
import PeopleCard from '@components/BusinessProfile/Cards/PeopleCard'
import { useState } from 'react'

export default function BusinessProfileMenu() {
  const [activePage, setActivePage] = useState(0)
  return (
    <Box margin="auto" w="100" maxW="1000px" mt="8">
      <BusinessProfileNav active={activePage} setActive={setActivePage} />
      {activePage === 0 && (
        <>
          <PeopleCard />
          <AboutCard />
        </>
      )}
      {activePage === 1 && (
        <Text p="5">Aqui vão aparecer indicativos financeiros</Text>
      )}
      {activePage === 2 && <Text p="5">Aqui vão aparecer downloads</Text>}
    </Box>
  )
}
