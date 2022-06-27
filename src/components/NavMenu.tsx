//TODO: logged in and logged out;

import React, { useEffect, useState } from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Text,
  useDisclosure,
  Button as ChakraButton,
  VStack,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'

import Logo from '@assets/Logo'
import { Button } from '@components/Button'

const MAX_SCROLL_HEIGHT = 10

export const NavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
    <>
      <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody pt="20" px="0">
            <VStack w="100%" p="6" gap="2">
              <Box w="100%">
                <ChakraButton
                  w="100%"
                  colorScheme="gray"
                  variant="outline"
                  color="gray.500"
                >
                  Entrar
                </ChakraButton>
              </Box>
              <Box w="100%">
                <ChakraButton w="100%" color="white" colorScheme="brand">
                  Criar Conta
                </ChakraButton>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
          scrollPosition > MAX_SCROLL_HEIGHT
            ? 'saturate(1.8) blur(5px)'
            : 'none'
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
            <HStack
              ml="14"
              gap="7"
              direction="row"
              display={{ base: 'none', lg: 'flex' }}
            >
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
          <Flex
            direction="row"
            align="center"
            display={{ base: 'none', lg: 'flex' }}
          >
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
          <Box p="2" onClick={onOpen}>
            <Icon
              as={FiMenu}
              display={{ base: 'flex', lg: 'none' }}
              fontSize="20px"
              color="brand.500"
            />
          </Box>
        </Flex>
      </Box>
    </>
  )
}
