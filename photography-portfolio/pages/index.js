import Head from 'next/head'; 
import Hero from '../components/Hero';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Nauth Photography' message='I photograph real moments frozen in time.'/>   

    </div>
  );
}



