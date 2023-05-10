import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RegistrationLayout() {
  return (
    <div className='w-full h-[100%] p-5 bg-[#0EAADA] flex items-center justify-center'>
      <Outlet/>
    </div>
  )
}
