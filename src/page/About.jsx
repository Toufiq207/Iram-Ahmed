import React from 'react'
import Image from '../compnent/Image'
import LineTwo from '../assets/lineTwo.png'
import Flex from '../compnent/Flex'
import Expriience from '../compnent/Expriience'
const About = () => {
  return (
    <section id='about'    className='bg-[url(/src/assets/about.png)] bg-no-repeat bg-cover bg-center mt-[1400px] md:mt-[200px]  '>
        <div  className='py-[70px] md:px-[260px] ' >
            <h1  className='text-[60px] text-[#FFFFFF] font-bold font-exo uppercase text-center'>About me</h1>
            <Image className='mx-auto pt-5' src={LineTwo}/>
            <p className='text-center text-[18px] text-[#FFFFFF] font-normal font-exo pt-4 '>Welcome to Iram Ahmed Creations — the creative space where ideas turn into visually stunning digital experiences.

I’m Iram Ahmed, a passionate and detail-oriented Video Editor, Photo Editor & Retoucher, Graphics Designer, and Social Media Manager with 3 years of professional experience in the digital creative industry.

Over the years, I’ve worked with brands, creators, and businesses to help them build a strong and impactful online presence. My work focuses on clean visuals, cinematic storytelling, and strategic content that grabs attention and delivers real results.
</p>
<p className='text-center text-[18px] text-[#FFFFFF] font-normal font-exo py-6 '>What I Do Best:</p>
<p className='text-center text-[18px] text-[#FFFFFF] font-normal font-exo pb-2 '>Video Editing: cinematic cuts, seamless transitions, story-driven edits</p>
<p className='text-center text-[18px] text-[#FFFFFF] font-normal font-exo pb-2 '>Photo Editing & Retouching: natural yet polished retouching and color perfection</p>
<p className='text-center text-[18px] text-[#FFFFFF] font-normal font-exo pb-2 '>Graphics Design: modern, minimal, brand-focused designs for digital and print</p>
<p className='text-center text-[18px] text-[#FFFFFF] font-normal font-exo pb-4 '>Social Media Management: content strategy, page setup, optimization & growth
</p>
<p className='text-center text-[18px] text-[#FFFFFF] font-normal font-exo  '>I believe in creativity backed by strategy. Every project I take on is crafted with precision, passion, and a commitment to quality—because your visuals represent your identity.
</p>
<p className='text-center text-[18px] text-[#FFFFFF] font-normal font-exo  pt-4 w-[375px] mx-auto'>Thank you for visiting my creative world. Let’s build something exceptional together.
</p>
        </div>



        <Flex className='justify-between px-20 flex-wrap'>
            <Expriience text='Video editing'/>
            <Expriience text='Photo Editing & Retouching'/>
            <Expriience text='Graphics Design'/>
            <Expriience text='Social Media Management'/>
            
            
        </Flex>
    </section>
  )
}

export default About