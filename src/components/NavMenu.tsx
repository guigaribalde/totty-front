//TODO: logged in and logged out;
//TODO: responsive version
//TODO: highlight current page

import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import Logo from '../assets/Logo'
import { Button } from './Button'
import React, { useEffect, useState } from 'react'

const MAX_SCROLL_HEIGHT = 10

export const NavMenu = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Box
      position="fixed"
      w="100%"
      zIndex="999"
      bgColor={
        scrollPosition > MAX_SCROLL_HEIGHT
          ? 'rgba(237, 242, 247, 0.8)'
          : 'transparent'
      }
      backdropFilter={
        scrollPosition > MAX_SCROLL_HEIGHT ? 'saturate(1.8) blur(5px)' : 'none'
      }
      boxShadow={
        scrollPosition > MAX_SCROLL_HEIGHT
          ? 'inset 0 -1px 0 0 rgba(0,0,0,.1);'
          : 'none'
      }
      transition="all 0.3s ease"
    >
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
