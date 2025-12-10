import React, { useState } from 'react'
import Image from '../compnent/Image'
import Consult from '../assets/consult.png'
import LineFour from '../assets/lineFour.png'
import Flex from '../compnent/Flex'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
const Contact = () => {
    const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      "YOUR_SERVICE_ID",     // Service ID
      "YOUR_TEMPLATE_ID",    // Template ID
      {
        name: formData.name,
        message: formData.message,
        to_email: "lijonlijon30@gmail.com",
      },
      "YOUR_PUBLIC_KEY"       // Public Key
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((err) => {
      console.log(err);
      alert("Failed to send message.");
    });
  };
  
  return (
<section id='contact' className='pt-[110px]'>
<div className='w-fit mx-auto'>
    <Image className='pb-[53px]' src={Consult}/>
    <Image className='pb-7' src={LineFour}/>
        <form className="pb-[80px]" onSubmit={sendEmail}>
      <Flex className="gap-[40px] flex-wrap">
        <Flex className="items-center gap-[40px]">
          <label htmlFor="name">My name is </label>
          <input
            className="py-2 border border-[#212121]"
            id="name"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
          />
        </Flex>

        <Flex className="items-center gap-x-[40px]">
          <label htmlFor="message">I am interested in </label>
          <textarea
            className="py-2 border border-[#212121]"
            id="message"
            name="message"
            placeholder="Message"
            onChange={handleChange}
          ></textarea>
        </Flex>

        <button className="bg-[#5A5A5A] py-2 px-10 rounded-2xl text-black text-[20px] font-orbi font-extrabold hover:bg-transparent hover:border border-black drop-shadow-2xl">
          Send
        </button>
      </Flex>
    </form>
    {/* <form className='pb-[80px]' >
       <Flex className='gap-[40px] flex-wrap'>
         <Flex className='items-center gap-[40px]'>

              <label htmlFor="name">My name is </label>
              <input className='py-2 border border-[#212121]' id='name' type="text" placeholder='Name'/>
        </Flex>
        <Flex className='items-center gap-x-[40px]'>
              <label htmlFor="massage">I am interested in </label>
              <textarea className='py-2 border border-[#212121]'  name="" id="massage" placeholder='Massage'></textarea>
        </Flex>
        <button className='bg-[#5A5A5A] py-2  px-10 rounded-2xl text-black text-[20px] font-orbi font-extrabold hover:bg-transparent hover:border border-black drop-shadow-2xl'>sent</button>
       </Flex>
        
    </form> */}
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