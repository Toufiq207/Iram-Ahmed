import React from 'react'
import Container from '../compnent/Container'
import Hero from '../layout/Hero'
import Service from '../page/Service'

const Homepage = () => {
  return (
    <section className='md:pt-[12px] pt-[65px]'>
        <Container>
            
            <Hero/>
            <Service/>
          
        </Container>
        
    </section>
  )
}

export default Homepage