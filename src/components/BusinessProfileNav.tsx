import { useState } from 'react'
import { Box, HStack, Icon } from '@chakra-ui/react'
import { FiDownload, FiGrid, FiTrendingUp } from 'react-icons/fi'

export default function BusinessProfileNav() {
  const [active, setActive] = useState(0)
  return (
    <>
      <HStack gap="12" justify="center">
        <Box
          w="fit-content"
          px="2"
          borderBottom="2px solid red"
          borderColor={active === 0 ? 'brand.500' : 'transparent'}
          cursor="pointer"
          transition="all 0.2s ease"
          onClick={() => setActive(0)}
        >
          <Icon
            as={FiGrid}
            color={active === 0 ? 'brand.500' : 'gray.300'}
            w={5}
            h={5}
          />
        </Box>
        <Box
          w="fit-content"
          px="2"
          borderBottom="2px solid red"
          borderColor={active === 1 ? 'brand.500' : 'transparent'}
          cursor="pointer"
          transition="all 0.2s ease"
          onClick={() => setActive(1)}
        >
          <Icon
            as={FiTrendingUp}
            color={active === 1 ? 'brand.500' : 'gray.300'}
            w={5}
            h={5}
          />
        </Box>
        <Box
          w="fit-content"
          px="2"
          borderBottom="2px solid red"
          borderColor={active === 2 ? 'brand.500' : 'transparent'}
          cursor="pointer"
          transition="all 0.2s ease"
          onClick={() => setActive(2)}
        >
          <Icon
            as={FiDownload}
            color={active === 2 ? 'brand.500' : 'gray.300'}
            w={5}
            h={5}
          />
        </Box>
      </HStack>
      <Box borderTop="1px solid black" borderColor="gray.100" mt="-0.5px" />
    </>
  )
}
