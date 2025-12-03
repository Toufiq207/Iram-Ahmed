import React from 'react'
import Container from '../compnent/Container'
import Flex from '../compnent/Flex'
import NaveberList from '../compnent/NaveberList'

const Navber = () => {
  return (
<nav className='bg-amber-300 py-3 fixed w-full'>
    <Container>
        <Flex className='justify-between'>
            <NaveberList text='Home'/>
            <NaveberList text='About'/>
            <NaveberList text='Service'/>
            <NaveberList text='Project'/>
        </Flex>
    </Container>
</nav>
  )
}

export default Navber