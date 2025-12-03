import React from 'react'
import Navber from '../layout/Navber'
import { Outlet } from 'react-router-dom'
const Rootpage = () => {
  return (
    <div>
        <Navber />
        <Outlet />
        <h1>footer</h1>
    </div>
  )
}

export default Rootpage