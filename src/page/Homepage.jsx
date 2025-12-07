import React from 'react'
import Container from '../compnent/Container'
import Hero from '../layout/Hero'
import Service from '../page/Service'
import About from './About'
import Testimonial from './Testimonial'

const Homepage = () => {
  return (
    <section className='md:pt-[35px] pt-[65px]'>
        <Container>
            
            <Hero/>
            <Service/>
            <About/>
            <Testimonial/>
          
        </Container>
        
    </section>
  )
}

export default Homepage