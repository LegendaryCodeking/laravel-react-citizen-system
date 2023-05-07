import React, { useState } from 'react'
import * as FaIcon from "react-icons/fi";

export default function DateContainer() {

  const [search, setSearch] = useState(false)

  const search_width = () => {
    setSearch(!search)
  }

  return (
    <div className='bg-white shadow-sm h-fit h-[100%] md:w-[40%] px-5 py-2 rounded'>
       <h1 className='text-md mb-4 font-bold tracking-wide'>Date</h1>

       <div className='flex items-center justify-between'>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-3 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" onClick={search_width} className={(search ? 'w-[80%]' : 'w-[50px]') + " transition-all ease-in-out block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2"} required />
            </div>

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
