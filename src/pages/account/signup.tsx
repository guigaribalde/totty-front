import Logo from '@assets/Logo'
import { Box, Checkbox, Flex, Text } from '@chakra-ui/react'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useRouter } from 'next/router'
import React from 'react'

// Registrar
export default function Signup() {
  const router = useRouter()
  function handleSignin() {
    router.push('/account/signin')
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
          Criar Conta
        </Text>
        <Box w="100%" mt="4" mb="2">
          <Text fontSize="sm" color="gray.400">
            Nome
          </Text>
          <Input />
        </Box>

        <Box w="100%" mb="3">
          <Text fontSize="sm" color="gray.400">
            Email
          </Text>
          <Input />
        </Box>
        <Flex w="100%" mb="6">
          <Checkbox colorScheme="brand" mr="2" />
          <Text fontSize="sm" color="gray.400">
            Aceito os{' '}
            <Text color="brand.300" decoration="underline" as="span">
              termos e condições.
            </Text>
          </Text>
        </Flex>
        <Button w="100%" mb="5">
          Criar
        </Button>
        <Box mx="auto">
          <Text textAlign="center" fontSize="sm">
            Já possui uma conta?
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
            onClick={handleSignin}
          >
            Entrar agora
          </Text>
        </Box>
      </Flex>
    </Flex>
  )
}
