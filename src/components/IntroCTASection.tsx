import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Button } from './Button'

export const IntroCTASection = () => {
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
      <Text w="588px" mt="5" color="gray.600">
        Centralizamos as informações da sua startup em um lugar só, assim você
        pode apresentar sua startup de uma maneira mais rápida e fácil. Deixe
        seu pitch falar por você!
      </Text>
      <Button mt="5">CRIAR CONTA AGORA</Button>
    </Flex>
  )
}
