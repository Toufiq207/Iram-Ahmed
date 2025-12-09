import React from 'react'
import Banner from '../assets/iram.png'
import Image from '../compnent/Image'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import Flex from '../compnent/Flex';
const Hero = () => {
  return (
<section id='home'>
    <Image className='w-full' src={Banner}/>
       <Flex className='gap-2 justify-center pt-2 md:hidden block'>
        <FaFacebookSquare  className='text-black'/>
      <FaLinkedin className='text-black'/>
<FaYoutube className='text-black' />
      </Flex>
</section>
  )
}

export default Hero