import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import axios from 'axios'

import { Box } from '@chakra-ui/react'
import Header from '@components/BusinessProfile/Header'
import Nav from '@components/BusinessProfile/Nav'
import { BusinessInterface } from '@ts/business'
import { BusinessProvider } from '@context/BusinessContext'

import json from 'src/db/index.json'

const env = process.env.NODE_ENV

interface StaticPathsProps {
  params: {
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: StaticPathsProps[] = []
  if (env === 'development') {
    const { data: b }: { data: BusinessInterface[] } = await axios.get(
      `http://localhost:3004/business`
    )
    b.forEach((b) => {
      paths.push({
        params: {
          slug: b.slug,
        },
      })
    })
  } else if (env === 'production') {
    json.business.forEach((b) => {
      paths.push({
        params: {
          slug: b.slug,
        },
      })
    })
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string }
  const business: BusinessInterface[] = []
  if (env === 'development') {
    const { data: b }: { data: BusinessInterface[] } = await axios.get(
      `http://localhost:3004/business?slug=${slug}`
    )
    business.push(...b)
  } else if (env === 'production') {
    business.push(
      json.business.find((b) => b.slug === slug) as BusinessInterface
    )
  }
  return {
    props: {
      business: business[0],
    },
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
