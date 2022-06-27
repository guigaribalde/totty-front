import { Box } from '@chakra-ui/react'
import type { GetStaticProps } from 'next'
import { HeroSection } from '@components/HeroSection'
import { TopBussinessSection } from '@components/TopBussinessSection'
import { SellMoreCard } from '@components/SellMoreCard'
import { IntroCTASection } from '@components/IntroCTASection'
import axios from 'axios'
import { ShortBusinessInterface } from 'src/interfaces/business'

export const getStaticProps: GetStaticProps = async () => {
  const { data: businesses }: { data: ShortBusinessInterface[] } =
    await axios.get('http://localhost:3004/top_business')
  return {
    props: {
      businesses,
    },
    revalidate: 60 * 60 * 24, // 1 day
  }
}

const Home = ({ businesses }: { businesses: ShortBusinessInterface[] }) => {
  return (
    <Box>
      <HeroSection />
      <IntroCTASection />
      <TopBussinessSection businesses={businesses} />
      <SellMoreCard />
    </Box>
  )
}

export default Home
