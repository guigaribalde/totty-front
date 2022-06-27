import { Box, Flex, Text } from '@chakra-ui/react'

import { SearchBar } from '@components/SearchBar'

export const HeroSection = () => {
  return (
    <Flex
      pt="24"
      bgColor="gray.100"
      w="100%"
      backgroundImage="/pattern.svg"
      backgroundPosition="center top"
    >
      <Flex
        mt="4"
        mx="auto"
        p="6"
        pb="12"
        align="center"
        justify="center"
        direction="column"
        w="800px"
      >
        <Text
          as="h1"
          fontSize="5xl"
          fontWeight="bold"
          textAlign="center"
          zIndex="1"
        >
          Explore Startups
        </Text>
        <Text as="h2" textAlign="center" color="gray.600" zIndex="1">
          A sua startup na palma da sua mão
        </Text>
        <Box w="100%" mt="10" zIndex="1">
          <SearchBar />
        </Box>
      </Flex>
    </Flex>
  )
}
