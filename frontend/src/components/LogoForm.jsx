import React from 'react'
import Logo from '../assets/images/logo-3.png'

export default function LogoForm() {
  return (
    <div className='title max-w-sm mx-auto bg-white rounded-xl overflow-hidden sm:max-w-[120px] p-2'>
        <img src={Logo} alt="" className='h-full w-full'/>
    </div>
  )
}
