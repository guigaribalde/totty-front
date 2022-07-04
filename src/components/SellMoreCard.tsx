import { Flex, Icon, Text } from '@chakra-ui/react'
import { FiChevronRight } from 'react-icons/fi'

import { Button } from '@components/Button'
import { useRouter } from 'next/router'

export const SellMoreCard = () => {
  const router = useRouter()
  function handleSignUp() {
    router.push('/account/signup')
  }
  return (
    <Flex mt="36" justify="center" align="center">
      <Flex
        maxW="750px"
        w="100%"
        px="20"
        py="14"
        textAlign="center"
        direction="column"
        justify="center"
        align="center"
        bgColor="#F4EDF7"
        borderRadius={{ base: '0', md: '10' }}
      >
        <Text fontWeight="extrabold" fontSize="6xl" mb="5">
          VENDA MAIS
        </Text>
        <Text mb="8">
          Expor sua empresa nunca foi tão fácil! Faça o marketing da sua empresa
          em eventos e campanhas de maneira fácil e aumente suas vendas no
          Account Based Marketing (ABM)
        </Text>
        <Button onClick={handleSignUp}>AUMENTAR VENDAS ABM</Button>
        <Flex
          mt="5"
          align="center"
          textAlign="center"
          color="brand.400"
          as="a"
          cursor="pointer"
          _hover={{ color: 'brand.600' }}
          transition="all 0.2s ease"
          onClick={handleSignUp}
        >
          <Text fontWeight="semibold">CRIAR CONTA GRÁTIS</Text>
          <Icon as={FiChevronRight} ml="1" fontSize="18" />
        </Flex>
      </Flex>
    </Flex>
  )
}
