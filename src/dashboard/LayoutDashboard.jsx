import React from 'react'
import Sidebar from './Siderbar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function LayoutDashboard() {
  return (
    <div>
    <Header/>
    <Sidebar/>
    <div className='ml-72 mt-2.5'><Outlet/></div>
    
    </div>
  )
}

export default LayoutDashboard