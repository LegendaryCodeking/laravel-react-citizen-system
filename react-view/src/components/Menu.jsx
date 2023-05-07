import React from 'react'

export default function Menu() {
  return (
    <div className='bg-white shadow-sm h-fit h-[100%] md:w-[40%] px-5 py-2 rounded'>
       <h1 className='text-md mb-4 font-bold tracking-wide'>Date</h1>

       <div className='flex items-center justify-between'>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
           
            <button className='rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiCalendar/> &nbsp;Calender</button>
        </div>

        <table className='md:table-auto w-full text-sm mt-2'>
            <thead className=' py-5'>
                <tr>
                    <td className='text-sm text-gray-500 font-medium py-2'>DATE</td>
                </tr>
            </thead>

            <tbody>
              <tr>
                <td className='bg-sky-200 text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                  <FaIcon.FiCalendar/>&nbsp; May 5, 2023
                </td>
                <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                  <FaIcon.FiCalendar/>&nbsp; May 6, 2023
                </td>
                <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                  <FaIcon.FiCalendar/>&nbsp; May 7, 2023
                </td>
                <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                  <FaIcon.FiCalendar/>&nbsp; May 8, 2023
                </td>
              </tr>
            </tbody>
       </table>
    </div>
  )
}
