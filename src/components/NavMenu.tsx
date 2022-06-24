//TODO: logged in and logged out;
//TODO: responsive version
//TODO: highlight current page

import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import Logo from '../assets/Logo'
import { Button } from './Button'
import React from 'react'

export const NavMenu = () => {
  return (
    <Box position="fixed" w="100%" zIndex="999">
      <Flex
        p="6"
        maxW="1000px"
        m="auto"
        align="center"
        justify="space-between"
        as="nav"
      >
        <Flex direction="row">
          <Logo />
          <HStack ml="14" gap="7" direction="row">
            <Text cursor="pointer" as="a" fontWeight="medium">
              Explorar
            </Text>
            <Text cursor="pointer" as="a" fontWeight="medium">
              Startups
            </Text>
            <Text cursor="pointer" as="a" fontWeight="medium">
              Desafios
            </Text>
          </HStack>
        </Flex>
        <Flex direction="row" align="center">
          <Text
            as="a"
            cursor="pointer"
            fontWeight="semibold"
            color="brand.500"
            mr="7"
            _hover={{ color: 'brand.600' }}
          >
            criar conta
          </Text>
          <Button>Entrar</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
