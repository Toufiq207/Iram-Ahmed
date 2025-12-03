import React from 'react'

const Heading = ({text,className}) => {
  return (
        <h2 className={`text-[39px] text-secondary font-dm font-bold ${className}`}>{text}</h2>
  )
}

export default Heading