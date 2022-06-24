import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { HeroSection } from '@components/HeroSection'
import { TopBussinessSection } from '@components/TopBussinessSection'
import { SellMoreCard } from '@components/SellMoreCard'
import { IntroCTASection } from '@components/IntroCTASection'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />
      <IntroCTASection />
      <TopBussinessSection />
      <SellMoreCard />
    </Box>
  )
}

export default Home
