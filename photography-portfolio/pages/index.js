import Head from 'next/head';
import './styles/globals.css'
import Hero from '../components/Hero';




export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>   
    </div>
  );
}



