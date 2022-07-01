import { Avatar, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { nameShortner } from '@utils/index'
import { Business } from '@prisma/client'

export const BussinessCard = ({ business }: { business: Business }) => {
  const router = useRouter()
  return (
    <Flex
      border="1px"
      borderRadius="10"
      borderColor="gray.200"
      px="5"
      py="8"
      minW="250px"
      cursor="pointer"
      _hover={{
        borderColor: 'brand.500',
      }}
      _active={{
        opacity: '0.3',
      }}
      transition="all 0.2s ease"
      onClick={() => {
        router.push(`/b/${business.slug}`)
      }}
    >
      <Avatar
        name={business.name}
        src={business.logo || undefined}
        bgColor="gray.100"
        color="gray.400"
        border="1px solid #E2E8F0"
      />
      <Flex direction="column" ml="4" justify="center">
        <Text fontWeight="medium">{nameShortner(business.name, 15)}</Text>
        <Text fontSize="sm" color="gray.600">
          {business.segment}
        </Text>
      </Flex>
    </Flex>
  )
}
