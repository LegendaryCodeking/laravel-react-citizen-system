import React from 'react'
import PaneBody from '../../components/PaneBody'
import profile from '../../assets/images/profile.png'
import * as FaIcon from "react-icons/fi";

export default function AddBarangayUser() {
  return (
    <>
        <PaneBody title='Register Brangay User'>
            <div className=' mt-10 border-2 border-gray-100 shadow-sm rounded p-5'>
                <form action="">

                    <div className='mt-5'>
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brangay</label>
                                <select type="number" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                                    <option value="" selected hidden>Binalayan West</option>
                                </select>
                            </div>

                            <div className='grid gap-6 mb-6 md:grid-cols-2 mt-5'>

                            <div>
                                <label for="Username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Person</label>
                                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Username" />
                            </div>

                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Password" />
                            </div>

                        </div>

                        <div className='mt-5 flex items-center justify-between'>
                            <div></div>

                            <div className='flex items-center justify-center gap-5'>
                                <button className='w-[100px] bg-blue-700 p-2 rounded text-white text-m font-semibold'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </PaneBody>
    </>
  )
}
