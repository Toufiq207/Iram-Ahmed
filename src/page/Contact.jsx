import React from 'react'
import Image from '../compnent/Image'
// import Consult from '../assets/consult.png'
import LineFour from '../assets/lineFour.png'
import Flex from '../compnent/Flex'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {

  return (
<section id='contact' className='pt-[110px]'>
<div className='w-fit mx-auto'>
    {/* <Image className='pb-[53px]' src={Consult}/> */}
  <h1 className="
  pb-[20px]
  text-[60px]
  font-exo
  font-bold
  bg-gradient-to-b
  from-[#00770E]
  to-[#C1FFB5]
  bg-clip-text
  text-transparent
">
  I am ready to consult you
</h1>

    <Image className='pb-7' src={LineFour}/>
     
    <form className='pb-[80px]' >
       <Flex className='gap-[40px] flex-wrap'>
         <Flex className='items-center gap-[40px]'>

              <label htmlFor="name">My name is </label>
              <input className='py-2 border border-[#212121]' id='name' type="text" placeholder='Name'/>
        </Flex>
        <Flex className='items-center gap-x-[40px]'>
              <label htmlFor="massage">I am interested in </label>
              <textarea className='py-2 border border-[#212121]'  name="" id="massage" placeholder='Massage'></textarea>
        </Flex>
        <button className='bg-[#5A5A5A] hover:bg-[#1BA23B] border border-transparent hover:border-black py-2  px-10 rounded-2xl text-black text-[20px] font-orbi font-extrabold  hover:text-white shadow-2xl duration-500'>sent</button>

       </Flex>
        
    </form>
    <Flex className='gap-x-[80px] pb-10 flex-wrap'>
        <Flex className='items-center gap-2'>
            <FaPhoneAlt className='text-[#008B2C]'/>
            <p className='text-black text-[20px font-normal font-exo]'>+8801311952468</p>
        </Flex>
        <Flex className='items-center gap-2'>
            <IoLocation  className='text-[#008B2C]'/>
            <p className='text-black text-[20px font-normal font-exo]'>Bangladesh</p>
        </Flex>
        <Flex className='items-center gap-2'>
            <MdEmail   className='text-[#008B2C]'/>
            <p className='text-black text-[20px font-normal font-exo]'>proiramahmed@gmal.com</p>
        </Flex>
    </Flex>
</div>
</section>
  )
}

export default Contact