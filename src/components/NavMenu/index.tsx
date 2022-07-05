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
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
} from '@chakra-ui/react'
import {
  FiBell,
  FiMenu,
  FiPower,
  FiSettings,
  FiUser,
  FiX,
} from 'react-icons/fi'

import Logo from '@assets/Logo'
import { Button } from '@components/Button'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

const MAX_SCROLL_HEIGHT = 10

export const NavMenu = () => {
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: userData } = useSession()
  const router = useRouter()

  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }
  const handleSignIn = () => {
    router.push('/account/signin')
  }
  const handleSignUp = () => {
    router.push('/account/signup')
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
                  onClick={handleSignIn}
                >
                  Entrar
                </ChakraButton>
              </Box>
              <Box w="100%">
                <ChakraButton
                  w="100%"
                  color="white"
                  colorScheme="brand"
                  onClick={handleSignUp}
                >
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
          <Box>
            <Flex
              direction="row"
              align="center"
              display={{ base: 'none', lg: 'flex' }}
              minH="40px"
            >
              {userData ? (
                <>
                  <Menu placement="bottom-end">
                    <MenuButton>
                      <Flex
                        align="center"
                        justify="center"
                        position="relative"
                        mr="5"
                      >
                        <Icon
                          as={FiBell}
                          boxSize={5}
                          cursor="pointer"
                          color="gray.600"
                        />
                        <Box
                          borderRadius="50%"
                          w="9px"
                          h="9px"
                          position="absolute"
                          top="0"
                          right="0"
                          bgColor="brand.500"
                        ></Box>
                      </Flex>
                    </MenuButton>
                    <MenuList p="0" w="400px">
                      <Box w="100" p="4">
                        <Text fontSize="lg" fontWeight="medium">
                          Notificações
                        </Text>
                      </Box>
                      {true ? (
                        <>
                          <Divider />
                          <Flex p="4" justify="space-between" align="center">
                            <Flex align="center" cursor="pointer">
                              <Avatar name="asd" size="sm" mr="2" />
                              <Box>
                                <Text fontSize="sm" fontWeight="medium">
                                  Titulo/Nome
                                </Text>
                                <Text fontSize="xs" color="gray.400">
                                  Aqui vai aparecer o texto da notificação...
                                </Text>
                              </Box>
                            </Flex>
                            <Icon
                              as={FiX}
                              color="gray.600"
                              cursor="pointer"
                              _hover={{ color: 'gray.400' }}
                              transition="all 0.2s ease"
                            />
                          </Flex>
                        </>
                      ) : (
                        <>
                          <Divider />
                          <Box p="4">
                            <Text fontSize="sm">
                              Nenhuma notificação por aqui :)
                            </Text>
                          </Box>
                        </>
                      )}
                    </MenuList>
                  </Menu>
                  <Menu>
                    <MenuButton>
                      <Box
                        p="2px"
                        bgColor="transparent"
                        borderRadius="50%"
                        border="2px solid white"
                        borderColor="brand.500"
                        cursor="pointer"
                      >
                        <Avatar
                          name={userData?.user?.name || ''}
                          src={userData?.user?.image || undefined}
                          size="sm"
                        />
                      </Box>
                    </MenuButton>
                    <MenuList color="gray.600">
                      <MenuItem>
                        <Icon as={FiUser} mr="3" />
                        <Text>perfil</Text>
                      </MenuItem>
                      <Divider my="2" />
                      <MenuItem>
                        <Icon as={FiSettings} mr="3" />
                        <Text as="a">configurações</Text>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          signOut({
                            callbackUrl: '/',
                          })
                        }}
                      >
                        <Icon as={FiPower} mr="3" />
                        <Text as="a" onClick={handleSignUp}>
                          sair
                        </Text>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </>
              ) : (
                <>
                  <Text
                    as="a"
                    cursor="pointer"
                    fontWeight="semibold"
                    color="brand.500"
                    mr="7"
                    _hover={{ color: 'brand.600' }}
                    onClick={handleSignUp}
                  >
                    criar conta
                  </Text>
                  <Button onClick={handleSignIn}>Entrar</Button>
                </>
              )}
            </Flex>

            <Box p="2" onClick={onOpen} display={{ base: 'flex', lg: 'none' }}>
              <Icon as={FiMenu} fontSize="20px" color="brand.500" />
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  )
}
