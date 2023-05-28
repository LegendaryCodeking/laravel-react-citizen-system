import React from 'react'
import Logo from '../assets/images/logo-senior.png'

export default function LogoForm() {
  return (
    <div className='title max-w-sm mx-auto bg-white rounded-xl overflow-hidden h-[150px] sm:max-w-[500px] p-2'>
        <img src={Logo} alt="" className='h-full w-full'/>
    </div>
  )
}
