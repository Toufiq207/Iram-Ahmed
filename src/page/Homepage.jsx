import React from 'react'
import Container from '../compnent/Container'
import Hero from '../layout/Hero'
import Service from '../page/Service'

const Homepage = () => {
  return (
    <section className='pt-[12px]'>
        <Container>
            
            <Hero/>
            <Service/>
          
        </Container>
        
    </section>
  )
}

export default Homepage