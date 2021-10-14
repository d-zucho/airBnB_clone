import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/banner/Banner'
import SmallCard from '../components/SmallCard'

// REPRESENTS HOME PAGE

export default function Home({ exploreData }) {
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

      {/*   -- Main --   */}
      <main className="max-w-[90%] sm:max-w-[85%] mx-auto">
        <section>
          <h2 className="font-semibold py-4">Explore Nearby</h2>

          {/* Pull Data From Server -- Static Rendering */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 xlg:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').then(
    (response) => response.json()
  )

  return {
    props: {
      // same as doing exploreData: exploreData
      exploreData,
    },
  }
}
