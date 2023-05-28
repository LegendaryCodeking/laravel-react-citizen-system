import React, { useState } from 'react'
import * as FaIcon from "react-icons/fi";

export default function DateContainer({address, loading}) {

  const [search, setSearch] = useState(false)

  const search_width = () => {
    setSearch(!search)
  }

  return (
    <div className='bg-white shadow-sm h-fit h-[100%] md:w-[40%] px-5 py-2 rounded'>
       <h1 className='text-md mb-4 font-bold tracking-wide'>Barangay</h1>

       <div className='flex items-center justify-between'>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-3 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" onClick={search_width} className={(search ? 'w-[80%]' : 'w-[50px]') + " transition-all ease-in-out block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2"} required />
            </div>

            <select name="" id="" className='border rounded-[5px] border-gray-300 text-gray-500'>
                  <option value="" selected hidden>Filter</option>
                  <option value="">Maripipi</option>
            </select>
        </div>

        <table className='md:table-auto w-full text-sm mt-2'>
            <thead className=' py-5'>
                <tr>
                    <td className='text-sm text-gray-500 font-medium py-2'>Address</td>
                </tr>
            </thead>

            <tbody>
              {loading && <>
                  <tr>
                    <div className='h-[35px] mb-4 w-full bg-gray-200 rounded p-3 animate-pulse'>
                      
                    </div>
                  </tr>
                  <tr>
                    <div className='h-[35px] mb-4 w-full bg-gray-200 rounded p-3 animate-pulse'>
                      
                    </div>
                  </tr>
                  <tr>
                    <div className='h-[35px] mb-4 w-full bg-gray-200 rounded p-3 animate-pulse'>
                      
                    </div>
                  </tr>
                  <tr>
                    <div className='h-[35px] mb-4 w-full bg-gray-200 rounded p-3 animate-pulse'>
                      
                    </div>
                  </tr>
                </>}

              {
                address.map(item => (
                  <tr key={item.id} className='mb-3'>
                    <td className='capitalize bg-blue-200 rounded text-blue-500 font-semibold flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                      <FaIcon.FiHome/>&nbsp; {item.barangay}, {item.city}, {item.province}
                    </td>
                  </tr>
                ))
              }
             
            </tbody>
       </table>
    </div>
  )
}
