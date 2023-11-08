import React from 'react'
import Hero from '../components/Hero';
import Porfolio from '../components/Porfolio';

const work = () => {
  return (
    <div>
        <Hero heading={'My Work'} message={"Take a look around."}/>
        <Porfolio/>
    </div>
  )
}

export default work