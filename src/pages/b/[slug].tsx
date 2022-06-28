import { GetServerSideProps } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { Box } from '@chakra-ui/react'
import Header from '@components/BusinessProfile/Header'
import Nav from '@components/BusinessProfile/Nav'
import { BusinessInterface } from '@ts/business'
import { BusinessProvider } from '@context/BusinessContext'

export const getServerSideProps: GetServerSideProps = async (props) => {
  const slug = props.query.slug as string

  const { data: business }: { data: BusinessInterface[] } = await axios.get(
    `http://localhost:3004/business?slug=${slug}`
  )

  return {
    props: { business: business[0] },
  }
}

export default function Profile({ business }: { business: BusinessInterface }) {
  return (
    <>
      <Head>
        <title>
          Totty | {business.name} - {business.segment}
        </title>
      </Head>
      <Box pt="24">
        <BusinessProvider business={business}>
          <Header />
          <Nav />
        </BusinessProvider>
        <Box mb="20" />
      </Box>
    </>
  )
}
