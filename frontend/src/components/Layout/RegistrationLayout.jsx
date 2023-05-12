import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../assets/css/registration.css'
import RegistrationNavbar from './RegistrationNavbar'

export default function RegistrationLayout() {
  return (
    <div className='body w-full h-fit flex flex-col items-center justify-center'>
      <div className='backdrop'></div>
      <RegistrationNavbar/>
      <Outlet/>
    </div>
  )
}
