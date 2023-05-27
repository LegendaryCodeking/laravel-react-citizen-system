import React from 'react'
import PaneBody from '../../components/PaneBody'
import profile from '../../assets/images/profile.png'
import * as FaIcon from "react-icons/fi";

export default function AddSenior() {
  return (
    <>
        <PaneBody title='Add Senior'>
            <div className=' mt-10 border-2 border-gray-100 shadow-sm rounded p-5'>
                <form action="">
                    <div className='bg-gray-100 h-[200px] w-full rounded flex flex-col justify-center items-center'>
                        <img src={profile} className='w-20 h-20 rounded-full' alt="" />
                        <p className='font-semibold text-md text-gray-500'>Image must be a type of jpg, png</p>

                        <div className='w-[500px] flex items-center justify-center gap-5 mt-4'>
                            <div className='bg-white h-10 p-5 rounded shadow-sm flex items-center'>
                                <label htmlFor="profile_upload" className='text-md font-semibold flex items-center justify-center gap-3'><FaIcon.FiUpload/>Upload Profile</label>
                                <input type="file" name="profile_upload" className='hidden' id="profile_upload" />
                            </div>
                            <div className='bg-white h-10 p-5 rounded shadow-sm flex items-center'>
                                <button className='text-md text-red-500 font-semibold flex items-center justify-center gap-3'><FaIcon.FiTrash/>Delete Profile</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="First name" />
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Last name" />
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Email</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Contact Email" />
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                                <input type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Contact Number" />
                            </div>

                        </div>

                        <div className='grid gap-6 mb-6 md:grid-cols-3'>
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
                                <select type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option value="" selected hidden>Province</option>
                                </select>
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Municipality</label>
                                <select type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option value="" selected hidden>Municipality</option>
                                </select>
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barangay</label>
                                <select type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option value="" selected hidden>Barangay</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </PaneBody>
    </>
  )
}
