import React, { useState } from 'react'
import PaneBody from '../components/PaneBody'
import SeniorTable from '../components/Tables/SeniorCitizen'
import * as FaIcon from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";

export default function Seniors() {

  const [checked, setChecked] = useState(false)

  const multiple_check = () => {
    setChecked(!checked)
  }
  return (
    <>
      <PaneBody title='Senior Citizen'>

        <div>
          <div className='mt-10 flex items-center justify-between'>

            <div className='flex items-center justify-center gap-2'>

              <select name="" id="" className='border rounded-[5px] border-gray-300 text-gray-500'>
                  <option value="" selected hidden>All</option>
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                  <option value="">100</option>
              </select>

              <div className='border rounded-[5px] border-gray-300 flex items-center gap-2 md:px-5 py-2 cursor-pointer text-gray-500'>
                <input type="checkbox" name="" id="multiple" onChange={multiple_check} />
                <label htmlFor='multiple' className='cursor-pointer'>Select Multiple</label>
              </div>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <Link to={'/seniors/add-senior'} className='flex justify-center items-center bg-blue-500 text-white rounded px-2 py-2 hover:bg-gray-600 font-semibold text-md gap-1'><FaIcon.FiPlusCircle/>Add Senior</Link>
              <div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-[300px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Senior" required />
                </div>
              </div>

              <select name="" id="" className='border rounded-[5px] border-gray-300 text-gray-500'>
                <option value="" selected hidden>Filter</option>
                <option value="">All</option>
                <option value="">Student</option>
                <option value="">Regulars</option>
                <option value="">Senior</option>
                <option value="">PWD</option>
              </select>
            </div>

          </div>
        </div>

        <div className='w-full border border-1 border-gray-200 shadow-sm rounded mt-5'>
          <SeniorTable/>
        </div>
      </PaneBody>
    </>
  )
}
