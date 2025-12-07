import React from 'react'
import Flex from './Flex'

const Expriience = ({text}) => {
  return (
    <Flex className='gap-[27px] items-center'>
        <p className='text-[20px] text-[#FFFFFF] font-medium font-orbi'>{text}</p>
        <div className='w-[10px] h-[10px] rounded-full bg-green-500'></div>
    </Flex>
  )
}

export default Expriience