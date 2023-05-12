import React from 'react'
import * as FaIcon from "react-icons/fa";
import CreateAccount from '../Modals/CreateAccount';

export default function Success({data}) {
  return (
    <div className='flex flex-col items-center mt-6 w-full h-screen shadow-lg'>
        <h1 className='text-[#51e949] text-[100px] font-md mb-3'><FaIcon.FaCheckCircle/></h1>
        <div className='w-[80%] text-green-700 text-sm rounded mb-6 p-2 bg-green-300 border border-gray-200'>
            Your registration submitted successfully! Please wait 2-3 working days for verification! We will send the QR Code via email.
        </div>
        <div className='mb-6 w-[80%] border border-2-gray-500 p-2 shadow-md rounded-[10px]'>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider'>Name: 
                <span className='text-gray-500 text-sm font-medium'> {data.last_name}&nbsp; {data.first_name}&nbsp;{data.middle_initial}.</span>
            </h1>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider'>Email: 
                <span className='text-gray-500 text-sm font-medium'> {data.email}</span>
            </h1>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider'>Address: 
                <span className='text-gray-500 text-sm font-medium uppercase'> {data.address}</span>
            </h1>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider'>Contact Number: 
                <span className='text-gray-500 text-sm font-medium'> {data.contact_number}</span>
            </h1>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider'>Gender: 
                <span className='text-gray-500 text-sm font-medium uppercase'> {data.gender}</span>
            </h1>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider'>Birthdate: 
                <span className='text-gray-500 text-sm font-medium'> {data.birthdate}</span>
            </h1>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider'>Age: 
                <span className='text-gray-500 text-sm font-medium'> {data.age}</span>
            </h1>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider'>Religion: 
                <span className='text-gray-500 text-sm font-medium'> {data.religion}</span>
            </h1>
        </div>

        <div className='w-[80%] border border-2-gray-500 p-2 shadow-md rounded-[10px]'>
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider flex items-center justify-center uppercase'><p>{data.type} ID: </p> 
                <p className='text-lg font-medium text-[#51e949]'><FaIcon.FaCheckCircle/></p>
            </h1>

            {data.type == 'student' && 
            <h1 className='text-[#0755A2] mb-4 font-medium text-mc tracking-wider flex items-center justify-center'><p>Study Load: </p> 
                <p className='text-lg font-medium text-[#51e949]'><FaIcon.FaCheckCircle/></p>
            </h1>
            }
        </div>

        <CreateAccount id={data}/>
      
    </div>
  )
}
