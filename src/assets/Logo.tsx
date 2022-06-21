import { Flex, Text, Image } from '@chakra-ui/react'

const Logo = () => {
  return (
    <Flex>
      <Image src="/totty.svg" alt="Totty Logo" w={87.933 / 2} h={74.991 / 2} />
      <Text fontSize="2xl" fontWeight="semibold" color="brand.500" ml="2">
        Totty
      </Text>
    </Flex>
  )
}

export default Logo
