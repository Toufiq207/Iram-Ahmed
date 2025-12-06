import React, { Children } from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[1512px] mx-auto ${className}`}>{children}</div>
  )
}

export default Container