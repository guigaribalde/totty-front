import { GetServerSideProps } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { Box } from '@chakra-ui/react'
import Header from '@components/BusinessProfile/Header'
import Nav from '@components/BusinessProfile/Nav'
import { BusinessInterface } from '@ts/business'
import { BusinessProvider } from '@context/BusinessContext'

import json from 'src/db/index.json'

const env = process.env.NODE_ENV

export const getServerSideProps: GetServerSideProps = async (props) => {
  const slug = props.query.slug as string

  const business = []

  if (env === 'development') {
    const { data: b }: { data: BusinessInterface[] } = await axios.get(
      `http://localhost:3004/business?slug=${slug}`
    )
    business.push(b[0])
  } else if (env === 'production') {
    const b = json.business.find((b) => b.slug === slug) as BusinessInterface
    business.push(b)
  }

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
