import React from 'react'
import Container from '../compnent/Container'
import Image from '../compnent/Image'
import Vector from '../assets/vector .png'
import VedioEditin from '../assets/videoEditing.png'
import Border  from '../assets/border.png'
import Cart from '../compnent/Cart'
import VedioThamline from '../assets/videThumbnails.png'
import Taka from '../assets/taka.png'
import Flex from '../compnent/Flex'
import Meru from '../assets/meru.png'


const Service = () => {
  return (
  
  <section id='service' className='relative'>
    <Container>
      <Image className=' md:pt-25 pt-30' src={Vector}/>
      <Image className=' md:pt-50 pt-348' src={Vector}/>
      <Image className=' md:pt-40 pt-355' src={Vector}/>
      

        <div className='bg-[#ffffffbf]  w-full absolute top-0 pt-[135px]'>
         <div className='w-fit mx-auto'>
           {/* <Image className='pb-4' src={VedioEditin}/> */}
           {/* <h1 className='text-[48px] text-black font-bold font-exo pb-4'>Video Editing</h1> */}
          <h1 className="text-[48px] font-bold font-exo pb-4 bg-gradient-to-r from-[#00DB0F] via-[#004E05] bg-clip-text text-transparent">
  Video Editing
</h1>
          <Image className='pb-[120px]' src={Border}/>
          
            <Flex className='gap-4n flex-wrap'>
              <Cart img={ VedioThamline } text='Wedding video'/>
              <Cart img={ Taka } text='Cinematography'/>
              <Cart img={ Meru } text='Reels / shorts'/>
            </Flex>
         </div>
         <div className='w-fit mx-auto'>
           {/* <Image className='pb-4 pt-[98px]' src={Grafice}/> */}
                   <h1 className="text-[48px] font-bold font-exo pb-4 bg-gradient-to-r from-[#00DB0F] via-[#004E05]  bg-clip-text text-transparent">
  Graphics Design
</h1>
            <Image className='pb-[120px]' src={Border}/>
             <Flex className='gap-4 flex-wrap'>
              <Cart img={ VedioThamline } text='Thumbnail'/>
              <Cart img={ Taka } text='Banner'/>
              <Cart img={ Meru } text='Post design'/>
            </Flex>
         </div>
              <div className='w-fit mx-auto' >
                {/* <Image className='pb-4 pt-[98px]' src={ PhotoEditing}/> */}
                        <h1 className="text-[48px] font-bold font-exo pb-4 bg-gradient-to-r from-[#00DB0F] via-[#004E05]  bg-clip-text text-transparent">
Photo Editing & Retouching
</h1>
            <Image className='pb-[120px]' src={Border}/>
 <Flex className='gap-4 flex-wrap'>
              <Cart img={ VedioThamline } text='Wedding'/>
              <Cart img={ Taka } text='Potrait '/>
              <Cart img={ Meru } text='landscape'/>
            </Flex>
              </div>

        </div>
    
    </Container>
  </section>
  )
}

export default Service