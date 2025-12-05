import React from 'react'
import Image from '../compnent/Image'
import Iram  from '../assets/iram.jpg'
import Flex from '../compnent/Flex'
import Heading from '../compnent/Heading'
const Banner = () => {
  return (
    <section className='py-[50px]'>
        <Flex>
            <div className='w-1/2 flex items-center justify-center'>
       <div>
         <Heading text='IRAM AHMED'/>
        <p className='text-2xl text-black font-dm font-medium w-[400px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A repellat consequatur reiciendis dicta laboriosam! Quam impedit praesentium, corrupti, fugiat cum atque asperiores molestiae sint reiciendis dignissimos quasi itaque tenetur harum.</p>
       </div>
        </div>
            <div className='w-1/2'>
        <Image  src={Iram}/>
        </div>
      
        </Flex>
    </section>
  )
}

export default Banner