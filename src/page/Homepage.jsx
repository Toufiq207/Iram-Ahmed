import React from 'react'
import Container from '../compnent/Container'
import Banner from '../layout/Banner'
import Hero from '../layout/Hero'

const Homepage = () => {
  return (
    <section className='pt-[40px]'>
        <Container>
            <Banner/>
            <Hero/>
          
        </Container>
        
    </section>
  )
}

export default Homepage