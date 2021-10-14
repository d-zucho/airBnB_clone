import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/banner/Banner'

// REPRESENTS HOME PAGE

export default function Home() {
  return (
    <div>
      <Head>
        <title>Air BnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* -- Header -- */}
      <Header />
      {/* -- Banner --  */}
      <Banner />
    </div>
  )
}
