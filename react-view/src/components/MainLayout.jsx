import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { Dropdown } from 'flowbite-react'
import SideBar from './SideBar'

export default function MainLayout() {
  return (
    <div>

        <SideBar>
          <Outlet/>
        </SideBar>
      
    </div>
  )
}
