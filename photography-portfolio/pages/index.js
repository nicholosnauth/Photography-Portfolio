import Head from 'next/head'; 
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Instagram from '../components/Instagram';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Nick Nauth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='Nick Nauth Photography' message="Capturing the Essence of You: Unveiling Life's Moments in Every Frame."/>   
    <Slider slides={SliderData}/>
    <Instagram/>
    </div>
  );
}



