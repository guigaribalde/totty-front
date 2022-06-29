import { Box } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
// import axios from 'axios'

import { HeroSection } from '@components/HeroSection'
import { TopBussinessSection } from '@components/TopBussinessSection'
import { SellMoreCard } from '@components/SellMoreCard'
import { IntroCTASection } from '@components/IntroCTASection'
import { ShortBusinessInterface } from '@ts/business'
import Head from 'next/head'

import json from 'src/db/index.json'

export const getStaticProps: GetStaticProps = async () => {
  // const { data: businesses }: { data: ShortBusinessInterface[] } =
  //   await axios.get('http://localhost:3004/top_business')
  const businesses = json.top_business
  return {
    props: {
      businesses,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

const Home = ({ businesses }: { businesses: ShortBusinessInterface[] }) => {
  return (
    <>
      <Head>
        <title>Totty | Perfil digital para Startups</title>
      </Head>
      <Box>
        <HeroSection />
        <IntroCTASection />
        <TopBussinessSection businesses={businesses} />
        <SellMoreCard />
        <Box mt="36" />
      </Box>
    </>
  )
}

export default Home
