import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import { theme } from '@themes/default'
import { NavMenu } from '@components/NavMenu'
import { Footer } from '@components/Footer'

import '../themes/index.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Box position="relative" minH="100vh">
        <NavMenu />
        <Component {...pageProps} />
        <Box pt="150px" />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
