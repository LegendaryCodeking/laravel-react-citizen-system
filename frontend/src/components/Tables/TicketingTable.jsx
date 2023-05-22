import React from 'react'
import { useState } from 'react';
import * as FaIcon from "react-icons/fi";

export default function TicketingTable({title}) {

    const [search, setSearch] = useState(false)

    const search_width = () => {
        setSearch(!search)
    }

  return (
    <div className='bg-white shadow-sm h-fit md:w-full px-5 py-2 rounded'>
       <h1 className='text-md mb-4 font-bold tracking-wide'>{title}</h1>

       <div className='flex items-center justify-between mb-4'>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-3 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" onClick={search_width} className={(search ? 'w-[90%]' : 'w-[50px]') + " transition-all ease-in-out block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2"} required />
            </div>

            <button className='rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiPrinter/> &nbsp;Print</button>
        </div>

       <table className='md:table-auto w-full bg-gray-100 text-sm'>
            <thead className=' py-5'>
                <tr>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>#</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>NAME</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>AGE</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>GENDER</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>TYPE</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>DATE</td>
                </tr>
            </thead>

            <tbody>
                <tr className='p-5 border border-b-2 hover:bg-gray-300 pointer mb-5'>
                    <td className='px-5 py-2'>1</td>
                    <td className='text-md px-5 py-2 font-medium flex gap-5 items-center'>
                        <div>
                            <img src="./public/images/image-1.jpg" alt="" className='sm:h-10 w-10 rounded-full'/>
                        </div>
                        <div>
                            <span>Neil Bryan Gaviola</span><br />
                            <span className='text-gray-500'>09360944819</span>
                        </div>
                    </td>
                    <td className='text-sm px-5 py-2 text-gray-500'>
                        <span>25</span>
                    </td>
                    <td className='text-sm px-5 py-2 text-gray-500'>
                        <span>MALE</span>
                    </td>
                    <td className='text-sm px-5 py-2 text-gray-500'>
                        <span className='rounded-[10px] bg-gray-300 text-red-500 px-2 text-sm'>STUDENT</span>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>05-03-2023</td>
                </tr>
            </tbody>
       </table>
    </div>
  )
}