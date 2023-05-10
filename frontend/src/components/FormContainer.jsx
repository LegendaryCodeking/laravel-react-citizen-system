import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'

export default function FormContainer({ children }) {
  return (
    <div className='lg:w-[40%] md:w-[90%] sm:w-[90%] sm:px-2 h-fit bg-white rounded shadow-lg flex items-center flex-col'>
        {children}
    </div>
  )
}
