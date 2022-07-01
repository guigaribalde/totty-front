import { Avatar, Box, Text } from '@chakra-ui/react'
import { useBusiness } from '@hooks/useBusiness'

export default function BusinessLogoAndModel() {
  const { business } = useBusiness()
  return (
    <Box position="relative">
      <Avatar
        name={business.name}
        src={business?.logo || undefined}
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
  )
}
