import { Box } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import { HeroSection } from '@components/HeroSection'
import { TopBussinessSection } from '@components/TopBussinessSection'
import { SellMoreCard } from '@components/SellMoreCard'
import { IntroCTASection } from '@components/IntroCTASection'
import Head from 'next/head'
import { Business } from '@prisma/client'
import { prisma } from '@lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
  const businesses = (await prisma.business.findMany({
    skip: 0,
    take: 4,
  })) as Business[]
  return {
    props: {
      businesses,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

const Home = ({ businesses }: { businesses: Business[] }) => {
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
