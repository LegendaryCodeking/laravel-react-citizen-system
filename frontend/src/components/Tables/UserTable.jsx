import React from 'react'

export default function UserTable({children, loading}) {
  return (
    <table className={(loading ? 'bg-gray-50' : 'bg-white') + ' md:table-auto w-full text-sm'}>
    <thead className='py-5 bg-gray-100'>
        <tr>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>Name</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>Address</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>Contact Info</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>Actions</td>
        </tr>
    </thead>

    {children}

    </table>
  )
}
