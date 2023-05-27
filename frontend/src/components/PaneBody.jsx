import React from 'react'

export default function PaneBody({children, title = ''}) {
  return (
    <div className='w-full bg-white rounded border border-1 border-gray-200 px-9 py-6 '>
        <h1 className='font-bold text-lg tracking-wider '>{title}</h1>
        {children}
    </div>
  )
}
