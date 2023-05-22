import React from 'react'

export default function PeopleTable({children, loading}) {
  return (
    <table className={(loading ? 'bg-gray-50' : 'bg-gray-100') + ' md:table-auto w-full text-sm'}>
    <thead className=' py-5'>
        <tr>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>NAME</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>ADDRESS</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>TYPE</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>DATE</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>OPTIONS</td>
        </tr>
    </thead>

    {children}

    </table>
  )
}
