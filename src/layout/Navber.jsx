import React from 'react'
import Container from '../compnent/Container'
import Flex from '../compnent/Flex'
import NaveberList from '../compnent/NaveberList'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from "react-icons/fa";

const Navber = () => {
  return (
<nav className="bg-[#001202] py-[32px] fixed w-full">
  <Container>
    <div className="w-full flex justify-between items-center">
      <div className="logo w-1/2">
      <Flex className='gap-2'>
        <FaFacebookSquare  className='text-white'/>
      <FaLinkedin className='text-white'/>
<FaYoutube className='text-white' />
      </Flex>
        {/* Logo or anything */}
      </div>

      <div className="menu w-1/2">
        <ul className="flex justify-between uppercase">
          <NaveberList text="Home" />
          <NaveberList text="Service" />
          <NaveberList text="Portfolio" />
          <NaveberList text="About" />
          <NaveberList text="Contact" />
        </ul>
      </div>
    </div>
  </Container>
</nav>
  )
}

export default Navber