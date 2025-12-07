import React from 'react'
import Image from '../compnent/Image'

import LineThree from '../assets/linethree.png'

import Flex from '../compnent/Flex'
import Bar from '../assets/bar.png'
import TestimonialCart from "../component/TestimonialCart";

const Testimonial = () => {
  return (
    <section className='bg-[#FFFFFF]'>
        <Image className='mx-auto pt-[196px] pb-[20px]' src={TestimoniaPic}/>
        <Image className='mx-auto pb-[120px]' src={LineThree}/>
       <Flex className='justify-center gap-x-[80px]'>
         <TestimonialCart heading='Marcus' member='Co founder' pra='Perfect communication and exceptional skills. This guy is King.'/>
         <TestimonialCart heading='peter' member='Manager' pra='Did a Great Job. Understood All The Requirements.'/>
         <TestimonialCart heading='jane' member='CEO' pra='Jimmy was wonderful to work with. Will definitely hire him again'/>
       </Flex>
       <Image className='pt-[160px]' src={Bar}/>
    </section>
  )
}

export default Testimonial