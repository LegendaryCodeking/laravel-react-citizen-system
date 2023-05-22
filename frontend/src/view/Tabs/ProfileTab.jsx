import React from 'react'

export default function ProfileTab({passenger}) {
  return (
    <div className='mt-[20px] h-[300px] px-[100px] w-full flex lg:flex-row md:flex-col sm:flex-col lg:gap-[200px]'>
                
        <div className='w-full'>
            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-black text-md font-2xl'>Name:</h1>
                    <p className='text-gray-500 text-md font-2xl capitalize'>{passenger.last_name} {passenger.first_name} {passenger.middle_initial}</p>
                </div>
            </div>
            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-black text-md font-2xl'>Contact:</h1>
                    <div>
                        <p className='text-gray-500 text-md font-2xl'>{passenger.email}</p>
                        <p className='text-gray-500 text-md font-2xl'>{passenger.contact_number}</p>
                    </div>
                </div>
            </div>
            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-black text-md font-2xl'>Gender:</h1>
                    <p className='text-gray-500 text-md font-2xl capitalize'>{passenger.gender}</p>
                </div>
            </div>

            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-black text-md font-2xl'>Address:</h1>
                    <p className='text-gray-500 text-md font-2xl capitalize'>{passenger.address}</p>
                </div>
            </div>
        </div>

        <div className='w-full'>
            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-black text-md font-2xl'>Religion:</h1>
                    <p className='text-gray-500 text-md font-2xl capitalize'>{passenger.religion}</p>
                </div>
            </div>
            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-black text-md font-2xl'>Status:</h1>
                    <p className='text-gray-500 text-md font-2xl capitalize'>{passenger.status}</p>
                </div>
            </div>
            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-black text-md font-2xl'>Citizenship:</h1>
                    <p className='text-gray-500 text-md font-2xl capitalize'>{passenger.citizenship}</p>
                </div>
            </div>

            <div className='py-3 w-full mb-2 border-b border-gray-200'>
                <div className='flex items-center gap-5'>
                    <h1 className='text-black text-md font-2xl'>Type:</h1>
                    {passenger.type == 'student' && <p className='px-2 bg-gray-300 text-gray-500 text-md font-2xl rounded-[20px]'>Student</p>}
                    {passenger.type == 'regular' && <p className='px-2 bg-red-300 text-red-500 text-md font-2xl rounded-[20px]'>Regular</p>}
                    {passenger.type == 'senior' && <p className='px-2 bg-blue-300 text-blue-500 text-md font-2xl rounded-[20px]'>Senior</p>}
                    {passenger.type == 'pwd' && <p className='px-2 bg-green-300 text-green-500 text-md font-2xl rounded-[20px]'>PWD</p>}
                </div>
            </div>
        </div>
    </div>
  )
}
