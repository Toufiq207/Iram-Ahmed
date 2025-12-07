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
import Grafice from '../assets/graphicsDesign.png'
import PhotoEditing from '../assets/photoEditing .png'
const Service = () => {
  return (
  
  <section className='relative'>
    <Container>
      <Image className='md:pt-25 pt-30' src={Vector}/>
      <Image className='md:pt-50 pt-335' src={Vector}/>
      <Image className='md:pt-40 pt-340' src={Vector}/>
      

        <div className='bg-[#ffffffbf]  w-full absolute top-0 pt-[135px]'>
         <div className='w-fit mx-auto'>
           <Image className='pb-4' src={VedioEditin}/>
          <Image className='pb-[120px]' src={Border}/>
          
            <Flex className='gap-4n flex-wrap'>
              <Cart img={ VedioThamline } text='Wedding video'/>
              <Cart img={ Taka } text='Cinematography'/>
              <Cart img={ Meru } text='Wedding video'/>
            </Flex>
         </div>
         <div className='w-fit mx-auto'>
           <Image className='pb-4 pt-[98px]' src={Grafice}/>
            <Image className='pb-[120px]' src={Border}/>
             <Flex className='gap-4 flex-wrap'>
              <Cart img={ VedioThamline } text='Thumbnail'/>
              <Cart img={ Taka } text='Banner'/>
              <Cart img={ Meru } text='Post design'/>
            </Flex>
         </div>
              <div className='w-fit mx-auto' >
                <Image className='pb-4 pt-[98px]' src={ PhotoEditing}/>
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