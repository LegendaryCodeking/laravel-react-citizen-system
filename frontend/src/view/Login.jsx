import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='flex justify-between items-center h-full px-4'>
      <div className='hidden lg:block'></div>
      <div className='mt-2 flex flex-col items-center shadow-md md:h-[90%] sm:h-screen sm:w-screen sm:px-0 sm:py-0 lg:w-[35%] bg-gradient-to-b from-[#4f46e5] to-[#4f46e5] rounded-[10px]'>

          <div className='flex items-center justify-center py-10 px-3'>
            <img src="./public/images/logo-2.jpg" alt="" className='h-[90px] rounded'/>
          </div>

          <center><h1 className='mt-[10px] text-gray-200 text-4xl font-medium tracker-wide'>Welcome Back</h1></center>

          <div className='md:flex items-center gap-2 px-5 mt-[20px]'>
            <div className='bg-gray-300 md:w-[100px] md:h-[1px]'></div>
            <div className='text-gray-300'><h1>Log In To Your Account </h1></div>
            <div className='bg-gray-300 md:w-[100px] md:h-[1px]'></div>
          </div>

          <form action="" className='md:w-full mt-10 md:px-[60px]'>

            <div className='mb-7'>
              <label htmlFor="first_name" className="block mb-1 text-md font-medium text-gray-200">Username</label>
              <input type="text" id="first_name" className="bg-inherit border border-gray-200 text-white text-md placeholder-gray-200 rounded-lg focus:border-blue-500 block w-full py-3" placeholder="Username" required />
            </div>

            <div className='mb-7'>
              <label htmlFor="first_name" className="block mb-1 text-md font-medium text-gray-200">Password</label>
              <input type="Password" id="first_name" className="bg-inherit border border-gray-200 text-white text-md placeholder-gray-200 rounded-lg focus:border-blue-500 block w-full py-3" placeholder="Password" required />
            </div>

            <div className='sm:flex gap-2 sm:flex-col-2 items-center justify-between mb-7'>
              <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="keep_me_login" className='border border-gray-200 rounded' />
                <label htmlFor="keep_me_login" className='text-md font-sm text-gray-300 cursor-pointer'>Keep me logged in</label>
              </div>
              <div>
                <Link to={'/forgot-password'} className='text-gray-200 font-sm text-md'>Forgot Your Password?</Link>
              </div>
            </div>

            <div className='flex items-center w-full text-center mb-3'>
              <button className='text-blue-500 bg-white w-full p-3 rounded text-md font-bold tracker-wider hover:bg-inherit hover:text-gray-200 border hover:border-gray-200'>Login</button>
            </div>

          </form>

      </div>
      
    </div>
  )
}
