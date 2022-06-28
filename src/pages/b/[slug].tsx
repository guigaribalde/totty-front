import { Avatar, Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import { BusinessInterface } from '@ts/business'
import axios from 'axios'
import { GetServerSideProps } from 'next'
import { FiMoreVertical, FiPlusCircle } from 'react-icons/fi'

export const getServerSideProps: GetServerSideProps = async (props) => {
  const slug = props.query.slug as string

  const { data: business }: { data: BusinessInterface[] } = await axios.get(
    `http://localhost:3004/business?slug=${slug}`
  )

  return {
    props: { business: business[0] },
  }
}

export default function Profile({ business }: { business: BusinessInterface }) {
  console.log(business)

  return (
    <Box pt="24">
      {/* <Flex w="100" h="calc(100vh - 96px)" bgColor="red.100"></Flex> */}
      <Flex
        justify="center"
        maxW="1000px"
        w="100"
        px="6"
        margin="auto"
        position="relative"
        mt="10"
      >
        <Box position="relative">
          <Avatar
            name={business.name}
            src={business.logo}
            border="1px solid #E2E8F0"
            size="2xl"
            bgColor="gray.100"
            color="gray.400"
          />
          <Box
            position="absolute"
            bottom="0"
            right="0"
            bgColor="brand.500"
            p="1"
            px="4"
            borderRadius="2xl"
          >
            <Text color="white" fontWeight="semibold" fontSize="sm">
              {business.model}
            </Text>
          </Box>
        </Box>
        <HStack gap="0" position="absolute" right="0" top="0" pr="6">
          <Box p="3">
            <Icon as={FiPlusCircle} color="gray.400" />
          </Box>
          <Box p="3">
            <Icon as={FiMoreVertical} color="gray.400" />
          </Box>
        </HStack>
      </Flex>
      <Flex justify="center" align="center" mt="5" textAlign="center">
        <Text fontSize="3xl" fontWeight="semibold">
          {business.name}
        </Text>
        {business?.series && (
          <Flex
            ml="3"
            align="center"
            justify="center"
            w="6"
            h="6"
            bgColor="brand.500"
            borderRadius="50%"
          >
            <Text fontSize="sm" fontWeight="semibold" color="white">
              A
            </Text>
          </Flex>
        )}
      </Flex>
      <Box textAlign="center">
        <Text color="gray.600">{business.segment}</Text>
      </Box>
      <HStack gap="4" justify="center" mt="5">
        <Flex>
          <Text fontWeight="semibold" mr="2">
            {business.employees.min} - {business.employees.max}
          </Text>
          <Text>funcionários</Text>
        </Flex>
        <Flex>
          <Text fontWeight="semibold" mr="2">
            {Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(business.valuation.min)}
          </Text>
          <Text>valuation</Text>
        </Flex>
        <Flex>
          <Text fontWeight="semibold" mr="2">
            {business.growth}%
          </Text>{' '}
          <Text>crescimento</Text>
        </Flex>
      </HStack>
      <Box w="100" maxW="600px" margin="auto" mt="5">
        <Text color="gray.500">{business.description}</Text>
      </Box>
    </Box>
  )
}
