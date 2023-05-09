import React from 'react'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <div className=' md:w-full md:h-[100vh] bg-[url("./public/background.svg")] bg-no-repeat bg-white' >
      <Outlet/>
    </div>
  )
}
