import Head from 'next/head'; 
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Nauth Photography' message="Capturing the Essence of You: Unveiling Life's Moments in Every Frame."/>   
    <Slider slides={SliderData}/>
    </div>
  );
}



