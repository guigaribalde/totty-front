import { Box, Flex, HStack, Icon, Text } from '@chakra-ui/react'
import { FiMoreVertical } from 'react-icons/fi'
import BusinessLogoAndModel from '@components/BusinessProfile/Header/BusinessLogoAndModel'
import BusinessStats from '@components/BusinessProfile/Header/BusinessStats'
import { useBusiness } from '@hooks/useBusiness'

export default function BusinessHeader() {
  const { business } = useBusiness()

  return (
    <>
      <Flex
        justify="center"
        maxW="1000px"
        w="100"
        px="6"
        margin="auto"
        position="relative"
        mt={{
          base: '0',
          lg: '10',
        }}
      >
        <BusinessLogoAndModel />
        <HStack gap="0" position="absolute" right="0" top="0" pr="3">
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
      <BusinessStats />
      <Box w="100" maxW="1000px" margin="auto" mt="5" px="3">
        <Text color="gray.600">{business.description}</Text>
      </Box>
    </>
  )
}
