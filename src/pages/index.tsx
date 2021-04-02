import { Box } from '@chakra-ui/react'
import Head from 'next/head'

import { Counter } from '@/components//Counter'
import { Layout } from '@/components/layout'

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2>Home</h2>
      <button
        onClick={() => {
          window.alert('Hello, World!')
        }}
      >
        Button
      </button>
      <Box mt={30}>
        <Counter />
      </Box>
    </Layout>
  )
}

// eslint-disable-next-line import/no-default-export
export default Home
