import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'

import { Box } from '@chakra-ui/react'
import Header from '@components/BusinessProfile/Header'
import Nav from '@components/BusinessProfile/Nav'
import { BusinessProvider } from '@context/BusinessContext'

import { business } from '@lib/business'
import { BusinessExtended } from '@ts/business'
interface StaticPathsProps {
  params: {
    slug: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await business.get({ select: { slug: true } })
  if (!slugs) {
    return {
      paths: [],
      fallback: false,
    }
  }

  const paths: StaticPathsProps[] = slugs.map((b) => ({
    params: {
      slug: b.slug,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string }
  const b = (await business.get({
    where: { slug },
    include: {
      contact: true,
      employees: true,
      people: {
        include: {
          executives: true,
          founders: true,
          investors: true,
        },
      },
      social: true,
    },
  })) as BusinessExtended[]

  if (!b) {
    return {
      props: {
        business: null,
      },
    }
  }

  return {
    props: {
      business: b[0],
    },
    // revalidate: 60 * 60 * 24 * 30, // 1 month
    revalidate: 30,
  }
}

export default function Profile({ business }: { business: BusinessExtended }) {
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
