import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingCart, FiEye,FiUserPlus, FiHome, FiArchive, FiAnchor, FiUsers } from "react-icons/fi";
import RecentlyAdded from '../components/RecentlyAdded';
import { useStateContext } from '../Context/ContextProvider';
import axiosClient from '../axiosClient';
import senior from '../assets/images/senior.png'
import people from '../assets/images/people.png'
import house from '../assets/images/house.png'

export default function Dashboard() {

  const link = ''
  const title = 'Requests'

  return (
    <div>
      <h1 className='text-xl mb-4 font-bold tracking-wide'>Dashboard</h1>
      <div className='flex sm:flex-col gap-5'>
          <div className='dashboard sm:grid sm:grid-cols-3 gap-3 sm:mb-0 mb-5 w-[70%] sm:w-full'>

            <div className='bg-white shadow-md flex mb-5 gap-3'>

              <div className='flex justify-between items-center sm:w-[50%] w-[20%] bg-yellow-300'>
                <img src={senior} className='h-[80%] w-[80%]' alt="" />
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='title text-lg font-bold sm:text-sm sm:px-2'>Senior Citizen</h1>
                <p className='text-gray-700 text-lg font-medium px-3'>100</p>
              </div>
            </div>

            <div className='bg-white shadow-md flex mb-5 gap-3'>
                <div className='flex justify-between items-center  sm:w-[50%] w-[20%] bg-blue-500 h-full'>
                  <img src={house} className='h-[80%] w-[80%]' alt="" />
                </div>
                <div className='flex flex-col gap-2'>
                  <h1 className='title text-lg font-bold sm:text-sm sm:px-2'>Barangay</h1>
                  <p className='text-gray-700 text-lg font-medium px-3'>100</p>
                </div>
            </div>

            <div className='bg-white shadow-md flex gap-3 mb-5'>
                <div className='w-[20%] bg-green-500  sm:w-[50%]'>
                  <img src={people} className='h-[80%] w-[80%]' alt="" />
                </div>
                <div className='flex flex-col gap-2 py-2'>
                  <h1 className='title text-lg font-bold  sm:text-sm sm:px-2'>Users</h1>
                  <p className='text-gray-700 text-lg font-medium px-3'>100</p>
                </div>
            </div>

          </div>

          <RecentlyAdded link={link} title={title}/>

      </div>
    </div>
  )
}
