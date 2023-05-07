import React, { useRef, useState } from 'react'
import RecentlyAdded from '../components/RecentlyAdded'
import Table from '../components/Table'
import * as FaIcon from "react-icons/fi";
import Option from '../components/Option';

export default function People() {

  const [checked, setChecked] = useState(false)
  const [search, setSearch] = useState(false)
  const searchInput = useRef()

  const multiple_check = () => {
    setChecked(!checked)
  }

  const search_width = () => {
    setSearch(!search)
  }

  return (
    <div className='md:w-full bg-white rounded px-5 py-5 mt-[20px]'>
      <h1 className='text-xl mb-4 font-bold tracking-wide'>People &nbsp;
            <span className="inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
            20
            </span>
      </h1>

      <div className='flex items-center justify-between md:w-full'>

        <div className='mb-5 flex gap-3 items-center'>
          <select name="" id="" className='border rounded-[5px] border-gray-300 text-gray-500'>
            <option value="">10</option>
            <option value="">20</option>
            <option value="">30</option>
            <option value="">100</option>
          </select>

          <div className='cursor-pointer border rounded-[5px] border-gray-300 flex items-center gap-2 md:px-5 py-2 cursor-pointer text-gray-500'>
            <input type="checkbox" name="" id="multiple" onChange={multiple_check} />
            <label htmlFor='multiple' className='cursor-pointer'>Select Multiple</label>
          </div>

          <div>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input onClick={search_width} ref={searchInput} type="search" id="default-search" className={(search ? 'w-full' : 'w-[50px]') + " transition-all ease-in-out block md:px-5 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2"} required />
            </div>
          </div>
        </div>

        <div className='mb-5 flex gap-2 items-center'>
          {checked && <button className='rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiSave/> &nbsp;Save</button>}
          
          {checked && <Option/>}
          
          <button className='rounded bg-sky-500 text-white px-5 py-2 flex items-center'><FaIcon.FiPlus/> &nbsp;Register</button>
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
        

      <Table checked={checked}/>
        
    </div>
  )
}
