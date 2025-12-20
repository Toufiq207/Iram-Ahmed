import React from 'react'
import ProtCart from '../compnent/ProtCart'
import data from '../data'

const Protfolio = () => {
  return (
    <section id='prot' className='py-[56px] bg-[#000000]'>
      <h1 className='text-[48px] text-[#4EFF77] font-exo font-bold text-center pb[54px]'>services</h1>
    <div className='flex justify-center flex-wrap gap-[45px]'>
        {
          data.map(item=>(
            <ProtCart hed={item.heding} pra={item.details}/>
          ))
        }
    </div>
    </section>
  )
}

export default Protfolio