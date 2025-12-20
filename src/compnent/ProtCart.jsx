import React from 'react'

const ProtCart = ({hed,pra}) => {
  return (
    <div className='rounded-[20px] border border-[#3C3C3C] bg-black shadow-[0_0_20px_rgba(78,255,119,0.15)] py-2 px-6 '>
<h3 className='text-center text-[36px] text-[#FFFFFF] font-bold font-exo '>{hed}</h3>
<p className='text-center text-[20px] text-[#FFFFFF] font-normal font-exo md:w-[450px] w-[350px]'>{pra}</p>
  </div>
  )
}

export default ProtCart