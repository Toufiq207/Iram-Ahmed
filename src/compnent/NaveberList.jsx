import React from 'react'

const NaveberList = ({text,className}) => {
  return (
      <li className={`text-[16px] text-[#FFFFFF] font-normal hover:font-bold font-orbi list-none  cursor-pointer duration-500 ${className}`}>{text}</li>
  )
}

export default NaveberList