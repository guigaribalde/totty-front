import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { SearchBar } from '../components/SearchBar'
const Home: NextPage = () => {
  return (
    <Box>
      <SearchBar />
    </Box>
  )
}

export default Home
