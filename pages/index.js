import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Banner from '../components/Banner';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
export default function Home({ exploreData, cardsData }) {
  return (
    <div>
      <Head>
        <title>AirBnB</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Banner />
      <main className='max-w-7xl mx-auto'>
        <section className='pt-5'>
          <h2 className='font-semibold text-2xl pb-5'>Explore Nearby</h2>
          {/* Pull data from server Endpoint */}
          <div className='grid grid-cols-4 gap-x-7'>
            {exploreData.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className='font-semibold text-2xl pt-5 pb-5'>Live Anywhere</h2>
          <div className='flex overflow-scroll space-x-3 p-3'>
            {cardsData.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch('https://www.jsonkeeper.com/b/4G1G').then(
    (res) => res.json()
  );
  const cardsData = await fetch('https://www.jsonkeeper.com/b/VHHT').then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
