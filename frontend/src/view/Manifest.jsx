import React, { useEffect, useState } from 'react'
import axiosClient from '../axiosClient';
import BarangayTable from '../components/Tables/BarangayTable';
import PaneBody from '../components/PaneBody';
import { Link } from 'react-router-dom';
import * as FaIcon from "react-icons/fi";

export default function Manifest() {

  const [loading, setLoading] = useState(false)
  const [barangays, setbarangays] = useState([]);
  const [checked, setChecked] = useState(false)

  const multiple_check = () => {
    setChecked(!checked)
  }

  useEffect(() => {
    setLoading(true)
    axiosClient.get('/barangays')
      .then(({data}) => {
        console.log(data)
        setLoading(false)
        setbarangays(data.data)
      })
      .catch((err) => {
        setLoading(false)
      })
  }, [])


  return (
    <>
      <PaneBody title='Barangay'>

        <div>
          <div className='mt-10 flex items-center justify-between sm:overflow-auto'>

            <div className='flex items-center justify-center gap-2'>

              <select name="" id="" className='border rounded-[5px] border-gray-300 text-gray-500'>
                  <option value="" selected hidden>All</option>
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                  <option value="">100</option>
              </select>
            </div>

            <div className='flex items-center justify-center gap-2'>
              <Link to={'/barangay/add-barangay'} className='flex justify-center items-center bg-blue-500 text-white rounded lg:px-2 sm:text-sm lg:py-2 sm:py-1 sm:px-1 hover:bg-gray-600 font-semibold text-md gap-1'><FaIcon.FiPlusCircle className='sm:hidden lg:block'/>Add Barangay</Link>
              <div>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block lg:w-[300px] sm:w-[150px] p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Barangay" required />
                </div>
              </div>

            </div>

          </div>
        </div>

        <div className='w-full border border-1 border-gray-200 shadow-sm rounded mt-5 sm:overflow-auto'>
          <BarangayTable barangay={barangays} loading={loading}/>
        </div>
      </PaneBody>
    </>
  )
}
