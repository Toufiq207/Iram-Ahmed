import React from 'react'
import Banner from '../assets/iram.png'
import Image from '../compnent/Image'
const Hero = () => {
  return (
<section id='home'>
    <Image className='w-full' src={Banner}/>
</section>
  )
}

export default Hero