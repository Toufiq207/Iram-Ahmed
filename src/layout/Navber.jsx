import React from 'react'
import Container from '../compnent/Container'
import Flex from '../compnent/Flex'
import NaveberList from '../compnent/NaveberList'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from '../compnent/Image';
import Profilepic from '../assets/profilepic.jpg'
const Navber = () => {
  return (
<nav className="bg-[#001202] py-[32px] fixed w-full z-10">
  <Container>
    <div className="w-full flex justify-between items-center">
      <div className="logo w-1/2">
   <Flex className='items-center'>
     <a href="#home">
        <Flex className='items-center pr-2'>
        <Image className='w-[48px]' src={Profilepic}/>
        <p className='text-[24px] text-[#FFFFFF] font-bel font-normal'>Iram Ahmed Creations</p>
      </Flex>
     </a>
     
       <Flex className='gap-2'>
        <FaFacebookSquare  className='text-white'/>
      <FaLinkedin className='text-white'/>
<FaYoutube className='text-white' />
      </Flex>
   </Flex>
     
        {/* Logo or anything */}
      </div>

      <div className="menu w-1/2">
        <ul className="flex justify-between uppercase">
          <a href="#home"><NaveberList text="Home" /></a>
          <a href="#service"><NaveberList text="Service" /></a>
          <NaveberList text="Portfolio" />
       <a href="#about">   <NaveberList text="About" /></a>
       <a href="#contact">   <NaveberList text="Contact" /></a>
        </ul>
      </div>
    </div>
  </Container>
</nav>
  )
}

export default Navber