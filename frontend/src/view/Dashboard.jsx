import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart, FiEye,FiUserPlus, FiHome, FiArchive, FiAnchor, FiUsers } from "react-icons/fi";
import RecentlyAdded from '../components/RecentlyAdded';
import { useStateContext } from '../Context/ContextProvider';
import axiosClient from '../axiosClient';

export default function Dashboard() {

  const link = '/get-passengers'
  const title = 'Requests'

  return (
    <div>
      <h1 className='text-xl mb-4 font-bold tracking-wide'>Dashboard</h1>
      <div className='dashboard grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-2 mb-5'>

        <div className='bg-white shadow-md border-b-2 border-sky-500 px-3 py-2 flex flex-col'>

          <div className='flex gap-2'>
            <span className='text-sky-500 title text-lg font-medium'>
              <FiUserPlus/>
            </span>
            <h1 className='title text-lg'>Total Students</h1>
          </div>
          <div className='flex justify-between items-center'>
            <span className='text-xl font-sm text_number font-medium tracker-wide'>1000000</span>
            <Link to={'/dashboard'} className='text-sky-500'><FiEye/></Link>
          </div>
        </div>

        <div className='bg-white shadow-md border-b-2 border-yellow-500 px-3 py-2 flex flex-col'>
            <div className='flex gap-2'>
              <span className='text-yellow-500 title text-lg font-medium'>
                <FiUserPlus/>
              </span>
              <h1 className='title text-lg'>Total Regulars</h1>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-xl font-sm text_number font-medium tracker-wide'>1000000</span>
              <Link to={'/dashboard'} className='text-yellow-500'><FiEye/></Link>
            </div>
        </div>

        <div className='bg-white shadow-md border-b-2 border-red-500 px-3 py-2 flex flex-col'>
            <div className='flex gap-2'>
              <span className='text-red-500 title text-lg font-medium'>
                <FiUserPlus/>
              </span>
              <h1 className='title text-lg'>Total Seniors</h1>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-xl font-sm text_number font-medium tracker-wide'>1000000</span>
              <Link to={'/dashboard'} className='text-red-500'><FiEye/></Link>
            </div>
        </div>

        <div className='bg-white shadow-md border-b-2 border-pink-500 px-3 py-2 flex flex-col'>
          <div className='flex gap-2'>
              <span className='text-pink-500 title text-lg font-medium'>
                <FiUserPlus/>
              </span>
              <h1 className='title text-lg'>Total PWD</h1>
            </div>
            <div className='flex justify-between items-center'>
              <span className='text-xl font-sm text_number font-medium tracker-wide'>1000000</span>
              <Link to={'/dashboard'} className='text-pink-500'><FiEye/></Link>
            </div>
          </div>
      </div>

      <RecentlyAdded link={link} title={title}/>
    </div>
  )
}
