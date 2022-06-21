import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import { theme } from '../themes/default'
import { NavMenu } from '../components/NavMenu'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <NavMenu />
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
