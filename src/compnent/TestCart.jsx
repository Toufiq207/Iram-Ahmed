import React from 'react'

const TestCart = ({heading,member,pra}) => {
  return (
    <div className='w-[300px] h-[340px] bg-[url(/src/assets/testimonialCart.png)]'>
        <h3 className='text-center text-[#020101] text-[40px] font-exo font-bold pt-[70px] pb-[10px] uppercase'>{heading}</h3>
        <p className='text-center text-[#020101] text-[20px] font-exo font-normal pb-[10px]'>{member}</p>
        <p className='text-center text-[#020101] text-[20px] font-exo font-normal px-6'>{pra}</p>
    </div>
  )
}

export default TestCart