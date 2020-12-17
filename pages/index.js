import Head from 'next/head'
import Header from './components/Header'
import Hero from './components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Data Argentina</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="space-y-20 sm:space-y-32 md:space-y-40 lg:space-y-44 overflow-hidden">
        <Header />
        <Hero />
      </div>
    </div>
  )
}
