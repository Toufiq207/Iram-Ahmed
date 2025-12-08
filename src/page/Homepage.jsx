import React from 'react'
import Container from '../compnent/Container'
import Hero from '../layout/Hero'
import Service from '../page/Service'
import About from './About'
import Testimonial from './Testimonial'
import Contact from './Contact'


const Homepage = () => {
  return (
    <section className='md:pt-[35px] pt-[65px]'>
        <Container>
            
            <Hero/>
            <Service/>
            <About/>
            <Testimonial/>
            <Contact/>
          
        </Container>
        
    </section>
  )
}

export default Homepage