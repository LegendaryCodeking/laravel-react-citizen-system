import React, { useEffect, useState } from 'react'
import * as FaIcon from "react-icons/fi";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Profile from '../assets/images/profile.png'
import { useStateContext } from '../Context/ContextProvider';
import axiosClient from '../axiosClient';
import Spiral from './Spiral/Spiral';
import { Link } from 'react-router-dom';

export default function Table({checked, passengers}) {



    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    // console.log(checked)

    const handle = (id) => {
        alert(id)
    }
  

    // console.log(passengers);

  return (
        
        <>
           <tbody>

            {passengers ? <>
                {passengers.map(u => (
                <tr className={' p-5 border border-b-2 hover:bg-gray-300 pointer mb-5'}>
                <td className='text-md px-5 py-2 font-medium flex gap-5 items-center'>
                    {checked && <div><input type="checkbox" className='border border-2-gray-500 rounded' name="" id="multiple_check" /></div>}
                    <div>
                        <img src={u.selfie} alt="" className='sm:h-10 w-10 rounded-full'/>
                    </div>
                    <div>
                        <span>{u.last_name} {u.first_name}</span><br />
                        <span className='text-gray-500'>{u.contact_number}</span>
                    </div>
                </td>
                <td className='text-md px-5 py-2x text-gray-500 capitalize'>{u.address}</td>
                <td className='text-sm px-5 py-2 text-gray-500'>
                    
                    {u.type == 'student' && <span className='rounded-[10px] bg-gray-300 text-gray-500 px-2 text-sm capitalize'>{u.type}</span>}
                    {u.type == 'regular' && <span className='rounded-[10px] bg-red-300 text-red-500 px-2 text-sm capitalize'>{u.type}</span>}
                    {u.type == 'senior' && <span className='rounded-[10px] bg-blue-300 text-blue-500 px-2 text-sm capitalize'>{u.type}</span>}
                    {u.type == 'pwd' && <span className='rounded-[10px] bg-green-300 text-green-500 px-2 text-sm capitalize'>{u.type}</span>}
                </td>
                <td className='text-md px-5 py-2x text-gray-500'>{u.created_at}</td>
                <td>
                    
                <Menu as="div" className="relative inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
                        OPTIONS
                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                            {({ active }) => (
                                <Link
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'flex items-center px-4 py-2 text-sm w-full'
                                )}
                                to={'/passenger/profile/' + u.id + '/details'}
                                >
                                <FaIcon.FiEye/>&nbsp; View
                                </Link>
                            )}
                            </Menu.Item>
                            <Menu.Item >
                            {({ active }) => (
                                <button
                                className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'flex items-center px-4 py-2 text-sm w-full'
                                )}
                                onClick={ev => handle(1)}
                                >
                                <FaIcon.FiTrash/>&nbsp; Delete
                                </button>
                            )}
                            </Menu.Item>
                        </div>
                        </Menu.Items>
                    </Transition>
                    </Menu>
                </td>
            </tr>
            ))}

            </> : null}
            </tbody>
      </>
  )
}
