import React from 'react'
import * as FaIcon from "react-icons/fa";
import { Link } from 'react-router-dom';
import Spiral from '../Spiral/Spiral';
import TableSpiral from '../Spiral/TableSpiral';

export default function SeniorTable({children, loading, seniors}) {
  return (
    <table className={(loading ? 'bg-gray-50' : 'bg-white') + ' md:table-auto w-full text-sm'}>
    <thead className='py-5 bg-gray-100'>
        <tr>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>Name</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>Address</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>Contact Info</td>
            <td className='text-sm text-gray-500 font-medium px-5 py-2'>Actions</td>
        </tr>
    </thead>
        {
          loading && <Spiral/>
        }
    {!loading && <tbody>
     

        {
          seniors.map(item => (
            <tr key={item.id} className='p-5 border border-b-2 hover:bg-gray-300 pointer mb-5'>
              <td className='text-md px-5 py-2 font-medium flex gap-5 items-center'>
                  <div className='sm:hidden lg:block'>
                      <img src={item.profile_image} alt="" className='sm:h-10 w-10 rounded-full'/>
                  </div>
                  <div>
                      <span>{item.last_name + ' ' + item.first_name}</span><br />
                  </div>
              </td>
              <td><span>{item.barangay + ', ' + item.city + ', '+ item.province}</span></td>
              <td>
                <p className=''><span className='text-sm text-gray-500'>{item.number}</span></p>
                <p className=''><span className='text-sm text-gray-500'>{item.email}</span></p>
              </td>
              <td>
                <div className='flex gap-2'>
                  <Link className='bg-blue-500 text-white font-semibold p-2 rounded'><FaIcon.FaEye/></Link>
                  <button className='bg-green-500 text-white font-semibold p-2 rounded'><FaIcon.FaPen/></button>
                  <button className='bg-red-500 text-white font-semibold p-2 rounded'><FaIcon.FaTrash/></button>
                </div>
              </td>
              
            </tr>
          ))
        }
    </tbody>}

    </table>
  )
}
