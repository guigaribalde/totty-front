import { Box, Flex, Text } from '@chakra-ui/react'

import Logo from '@assets/Logo'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'

// Entrar
export default function Signin() {
  const router = useRouter()

  function handleSignup() {
    router.push('/account/signup')
  }
  function facebookSignIn() {
    signIn('facebook', { callbackUrl: '/' })
  }

  function linkedinSignIn() {
    signIn('linkedin', { callbackUrl: '/' })
  }

  return (
    <Flex
      h="100vh"
      w="100"
      direction="column"
      align="center"
      bgColor={{
        base: 'white',
        sm: '#F4F4F4',
      }}
    >
      <Box top="0" padding="10">
        <Logo />
      </Box>
      <Flex
        shadow={{
          base: 'none',
          sm: 'lg',
        }}
        bgColor="white"
        maxW="480px"
        w="100%"
        borderRadius="md"
        m={{
          base: '0',
          sm: '2',
        }}
        p={{
          base: '4',
          sm: '8',
        }}
        align="center"
        justify="center"
        direction="column"
      >
        <Text fontWeight="semibold" fontSize="2xl">
          Entrar
        </Text>
        <Box w="100%" mt="4" mb="3">
          <Text fontSize="sm" color="gray.400">
            Email
          </Text>
          <Input placeholder="Ex: contato@empresa.com" />
        </Box>
        <Button w="100%" mb="5">
          Entrar
        </Button>
        <Box mx="auto" w="100%">
          <Text textAlign="center" fontSize="sm">
            Ainda não tem uma conta?
          </Text>
          <Text
            textAlign="center"
            fontSize="sm"
            fontWeight="semibold"
            textDecor="underline"
            color="brand.400"
            cursor="pointer"
            _hover={{ color: 'brand.600' }}
            transition="all 0.2s ease"
            onClick={handleSignup}
          >
            Registrar-se de graça
          </Text>
          <Text fontSize="sm" my="4" textAlign="center" color="gray.500">
            - ou -
          </Text>

          <Button onClick={facebookSignIn} colorScheme="facebook" w="100%">
            <FaFacebook />
            <Text fontWeight="medium" ml="3">
              Continuar
            </Text>
          </Button>
          <Button
            onClick={linkedinSignIn}
            colorScheme="linkedin"
            w="100%"
            mt="1"
          >
            <FaLinkedin />
            <Text fontWeight="medium" ml="3">
              Continuar
            </Text>
          </Button>
        </Box>
      </Flex>
    </Flex>
  )
}
