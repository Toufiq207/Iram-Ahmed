import React, { useState } from 'react'
import Container from '../compnent/Container'
import Flex from '../compnent/Flex'
import NaveberList from '../compnent/NaveberList'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from '../compnent/Image';
import Profilepic from '../assets/profilepic.jpg'
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const Navber = () => {
  let [show,setShow]=useState(false)

  let handleclick=()=>{
    setShow(!show)
  }
  return (
<div>
  <nav className="bg-[#001202] py-[32px] fixed w-full z-10 md:block hidden">
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
<nav className='block md:hidden bg-[#001202] py-[32px] fixed justify-between w-full z-10'>
   <Flex className='items-center justify-between'>
     <div className='items-center '>
     <a href="#home">
        <Flex className='items-center pr-2'>
        <Image className='w-[48px]' src={Profilepic}/>
        <p className='text-[24px] text-[#FFFFFF] font-bel font-normal'>Iram Ahmed Creations</p>
      </Flex>
     </a>
     
    
   </div>
   <div className='pr-15 cursor-pointer' onClick={handleclick}>
   {
    show ?   <ImCross  className='text-white ' />: <FaBars className='text-white ' />
   }
   </div>
   </Flex>
   {
        show &&
        <div className='flex justify-center'>
          <ul className=" uppercase">
          <a href="#home"><NaveberList className="pb-2" text="Home" /></a>
          <a href="#service"><NaveberList className="pb-2" text="Service" /></a>
          <NaveberList className="pb-2" text="Portfolio" />
       <a href="#about">   <NaveberList className="pb-2" text="About" /></a>
       <a href="#contact">   <NaveberList text="Contact" /></a>
        </ul>
        </div>
   }
</nav>
</div>
  )
}

export default Navber