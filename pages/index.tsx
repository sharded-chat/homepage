import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Roadmap from '@/components/Roadmap'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharded</title>
        <meta name="description" content="The ability to communicate is crucial, and having the freedom to do so is fundamental." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <Hero />

      <Roadmap />

      <Footer />
    </>
  )
}
