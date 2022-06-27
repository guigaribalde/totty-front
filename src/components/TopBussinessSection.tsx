import { Box, Divider, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { ShortBusinessInterface } from 'src/interfaces/business'
import { BussinessCard } from './BussinessCard'

export const TopBussinessSection = ({
  businesses,
}: {
  businesses: ShortBusinessInterface[]
}) => {
  return (
    <Flex
      mx="auto"
      mt="36"
      justify="center"
      direction="column"
      maxW="1200px"
      w="100"
      pl="6"
      pr={{
        base: '0',
        xl: '6',
      }}
    >
      <Divider w="100%" orientation="horizontal" />
      <Text fontSize="lg" fontWeight="semibold" mt="14" mb="5">
        Startups do mês
      </Text>
      <Box overflowX="auto" w="100">
        <Flex justify="space-between" minW="1100px">
          {businesses.map((business) => (
            <BussinessCard key={business.id} business={business} />
          ))}
        </Flex>
      </Box>
    </Flex>
  )
}
