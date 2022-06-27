import type { AppProps } from 'next/app'
import { Box, ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'

import { theme } from '@themes/default'
import { NavMenu } from '@components/NavMenu'
import { Footer } from '@components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Box>
        <NavMenu />
        <Component {...pageProps} />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
