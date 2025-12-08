import React from 'react'
import Navber from '../layout/Navber'
import { Outlet } from 'react-router-dom'
const Rootpage = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        
    </div>
  )
}

export default Rootpage