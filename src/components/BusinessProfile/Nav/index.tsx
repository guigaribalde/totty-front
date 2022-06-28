import { Box, Flex, Icon, Text } from '@chakra-ui/react'

import BusinessProfileNav from '@components/BusinessProfile/Nav/BusinessProfileNav'
import AboutCard from '@components/BusinessProfile/Cards/AboutCard'
import PeopleCard from '@components/BusinessProfile/Cards/PeopleCard'
import { useState } from 'react'
import { FiBook, FiPaperclip } from 'react-icons/fi'

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
      {activePage === 2 && (
        <Flex
          direction={{
            base: 'column',
            md: 'row',
          }}
          mt="2"
          px="3"
        >
          <Box
            w="100%"
            borderRadius="md"
            border="1px solid black"
            borderColor="gray.200"
            p="6"
            mr={{
              base: '0',
              md: '2',
            }}
            mb={{
              base: '2',
              md: '0',
            }}
          >
            <Flex
              align="center"
              justify="space-between"
              direction="column"
              h="200px"
              color="gray.700"
            >
              <Box />
              <Icon as={FiBook} w={7} h={7} />
              <Text fontWeight="semibold">Pitch</Text>
            </Flex>
          </Box>
          <Box
            w="100%"
            borderRadius="md"
            border="1px solid black"
            borderColor="gray.200"
            p="6"
          >
            <Flex
              align="center"
              justify="space-between"
              direction="column"
              h="200px"
              color="gray.700"
            >
              <Box />
              <Icon as={FiPaperclip} w={7} h={7} />
              <Text fontWeight="semibold">BMC</Text>
            </Flex>
          </Box>
        </Flex>
      )}
    </Box>
  )
}
