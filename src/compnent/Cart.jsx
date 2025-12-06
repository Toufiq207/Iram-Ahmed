import React from 'react'
import Image from './Image'

const Cart = ({img,text}) => {
  return (
    <div >
        <div className='w-[360px]'>
            <div className='w-full h-[360px] pb-[40px]'>
                <Image src={img}/>
            </div>
            <div className='text-center text-[#020202] text-[40px] font-exo font-bold uppercase'>
                <p>{text}</p>
            </div>
        </div>
    </div>
  )
}

export default Cart