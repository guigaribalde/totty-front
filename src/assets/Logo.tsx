import { Flex, Text, Image } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Logo = () => {
  const router = useRouter()
  const handleClick = () => {
    router.push('/')
  }

  return (
    <Flex onClick={handleClick} cursor="pointer">
      <Image src="/totty.svg" alt="Totty Logo" w={87.933 / 2} h={74.991 / 2} />
      <Text fontSize="2xl" fontWeight="semibold" color="brand.500" ml="2">
        Totty
      </Text>
    </Flex>
  )
}

export default Logo
