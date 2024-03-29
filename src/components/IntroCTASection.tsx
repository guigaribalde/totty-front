import { Flex, Text } from '@chakra-ui/react'

import { Button } from '@components/Button'
import { useRouter } from 'next/router'

export const IntroCTASection = () => {
  const router = useRouter()
  function handleSignUp() {
    router.push('/account/signup')
  }
  return (
    <Flex
      mx="auto"
      mt="36"
      align="center"
      justify="center"
      textAlign="center"
      direction="column"
    >
      <Text fontSize="3xl" fontWeight="bold">
        O perfil digital da sua Startup
      </Text>
      <Text maxW="588px" w="100%" mt="5" color="gray.600">
        Centralizamos as informações da sua startup em um lugar só, assim você
        pode apresentar sua startup de uma maneira mais rápida e fácil. Deixe
        seu pitch falar por você!
      </Text>
      <Button mt="5" onClick={handleSignUp}>
        CRIAR CONTA AGORA
      </Button>
    </Flex>
  )
}
