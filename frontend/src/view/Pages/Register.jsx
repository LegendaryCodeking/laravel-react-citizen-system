import React from 'react'
import { Link } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import LogoForm from '../../components/LogoForm'

export default function Register() {
  return (
    <FormContainer>

        <div className='w-full'>

            <LogoForm/>

            <form action="" className='px-[50px]'>
                <h1 className='text-lg font-bold text-[#0755A2]'>Register</h1>
                <p className='text-sm font-sm text-gray-500'>Please enter your account details</p>

                <div className='mt-5 mb-6'>
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Name</label>
                    <div className='grid gap-2 mb-6 md:grid-cols-3 lg:grid-cols-[200px_minmax(200px,_1fr)_100px]'>
                        <div>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required/>
                        </div>
                        <div>
                            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required/>
                        </div>
                        <div className='lg:w-[60px]'>
                            <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MI" required/>
                        </div>  
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Email</label>
                    <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                </div>

                <div className='mb-6'>
                    <label for="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Address</label>
                    <div className='grid gap-2 mb-6 md:grid-cols-3'>
                        <div>
                            <select id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Provice</option>
                            </select>
                        </div>
                        <div>
                            <select id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>City/Municipality</option>
                            </select>
                        </div>
                        <div className=''>
                            <select id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Barangay</option>
                            </select>
                        </div>  
                    </div>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Age</label>
                    <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No #" required/>
                </div>

                <div className='mb-6'>
                    <label for="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Birthdate</label>
                    <div className='grid gap-2 mb-6 md:grid-cols-3'>
                        <div>
                            <select id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Day</option>
                            </select>
                        </div>
                        <div>
                            <select id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Month</option>
                            </select>
                        </div>
                        <div className=''>
                            <select id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Year</option>
                            </select>
                        </div>  
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Contact Number</label>
                    <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09**********" required/>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Gander</label>
                    <select id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Gender</option>
                        <option value="male" selected>Male</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Citizenship</label>
                    <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Citizenship" required/>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Gander</label>
                    <select id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Status</option>
                    </select>
                </div>

                <div className="flex mb-6 gap-3">
                    <div className="flex gap-2">
                        <input checked id="regular" type="radio" value="" name="default-radio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <label htmlFor="regular" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Regular</label>
                    </div>
                    <div className="flex gap-2">
                    <input id="student" type="radio" value="" name="default-radio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <label htmlFor="student" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Student</label>
                    </div>
                    <div className="flex gap-2">
                    <input id="senior" type="radio" value="" name="default-radio" className=""/>
                        <label htmlFor="senior" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Senior</label>
                    </div>
                </div>

                <div className="mb-6 w-full">
                   <button className='bg-blue-500 text-white w-full p-2 text-lg font-md rounded hover:bg-yellow-500 hover:text-white border hover:border-5-blue-500'>Next</button>
                </div>

            </form>

        </div>


    </FormContainer>
  )
}
