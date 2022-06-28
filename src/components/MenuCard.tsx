import { Box, Divider, Text } from '@chakra-ui/react'

export default function MenuCard({
  title,
  children,
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <Box
      w="100"
      mx={{
        base: '3',
        lg: '0',
      }}
      mt="2"
      borderRadius="md"
      border="1px solid black"
      borderColor="gray.200"
      p="6"
    >
      <Text fontSize="xl" fontWeight="semibold">
        {title}
      </Text>
      <Divider mt="1" />
      {children}
    </Box>
  )
}
