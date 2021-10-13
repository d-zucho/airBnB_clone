import Head from 'next/head'

// REPRESENTS HOME PAGE

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>lets build airBnB</h1>
    </div>
  )
}
