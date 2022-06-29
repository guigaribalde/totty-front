import { Box, Flex } from '@chakra-ui/react'

export default function MenuBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      w="100%"
      borderRadius="md"
      border="1px solid black"
      borderColor="gray.200"
      p="6"
      m="2"
    >
      <Flex
        align="center"
        justify="space-between"
        direction="column"
        h="200px"
        color="gray.700"
      >
        {children}
      </Flex>
    </Box>
  )
}
