import Head from 'next/head'
import Header from '../components/Header'

// REPRESENTS HOME PAGE

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Air BnB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* -- Header -- */}
      <Header />
      {/* -- Banner --  */}
    </div>
  )
}
