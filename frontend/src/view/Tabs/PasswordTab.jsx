import React from 'react'
import * as FaIcon from "react-icons/fa";

export default function PasswordTab({passenger_id}) {
  return (
    <div className='mt-[20px] h-[300px] px-[100px] w-full flex lg:flex-row md:flex-col sm:flex-col lg:gap-[200px]'>
        <div className='w-full'>
            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5 justify-between w-[80%]'>
                    <h1 className='text-black text-md font-2xl'>Current Password:</h1>
                    <input type="password" id="first_name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 "/>
                </div>
            </div>
            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5 justify-between w-[80%]'>
                    <h1 className='text-black text-md font-2xl'>New Password:</h1>
                    <div>
                    <input type="password" id="first_name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 " placeholder='Create New Password'/>
                    </div>
                </div>
            </div>
            <div className='py-3 flex gap-5 w-[80%] mb-6 border-b border-gray-200 justify-between'>
                <h1 className='text-black text-md font-2xl'>Confirm Password:</h1>
                <div className='flex items-center gap-5'>
                    <input type="password" id="first_name" class=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[500px] p-2.5 " placeholder='Confirm Password'/>
                </div>
            </div>

            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <button className='flex items-center justify-center w-[100px] gap-1 bg-[#4f46e5] text-white px-2 rounded py-1 hover:bg-yellow-500'><FaIcon.FaSave/>Save</button>
                </div>
            </div>
        </div>
    </div>
  )
}
