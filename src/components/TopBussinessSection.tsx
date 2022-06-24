import { Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BussinessCard } from './BussinessCard'

export const TopBussinessSection = () => {
  return (
    <Flex
      mx="auto"
      mt="36"
      justify="center"
      direction="column"
      w="1200px"
      px="6"
    >
      <Divider w="100%" orientation="horizontal" />
      <Text fontSize="lg" fontWeight="semibold" mt="14" mb="5">
        Startups do mês
      </Text>
      <Flex justify="space-between">
        <BussinessCard />
        <BussinessCard />
        <BussinessCard />
        <BussinessCard />
      </Flex>
    </Flex>
  )
}
