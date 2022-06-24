import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const BussinessCard = () => {
  return (
    <Flex
      border="1px"
      borderRadius="10"
      borderColor="gray.200"
      px="5"
      py="8"
      w="250px"
      justify="space-between"
    >
      <Avatar name=" " bgColor="gray.100" />
      <Flex direction="column" ml="4" justify="center">
        <Text
          fontWeight="medium
            "
        >
          Nome da Startup
        </Text>
        <Text fontSize="sm" color="gray.600">
          Setor
        </Text>
      </Flex>
    </Flex>
  )
}
