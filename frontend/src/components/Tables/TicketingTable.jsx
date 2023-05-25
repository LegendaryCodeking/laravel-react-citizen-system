import React, { useEffect } from 'react'
import { useState } from 'react';
import * as FaIcon from "react-icons/fi";
import TableSpiral from '../Spiral/TableSpiral';
import Spiral from '../Spiral/Spiral';
import axiosClient from '../../axiosClient';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';

export default function TicketingTable({title, children, loading, dataId, manifest}) {

    const [search, setSearch] = useState(false)
    

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const search_width = () => {
        setSearch(!search)
    }

    // const insert = () => {
    //     var sets = [
    //         {
    //             set: '2A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '2B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '2C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '3A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '3B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '3C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '4A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '4B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '4C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '5A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '5B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '5C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '6A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '6B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '6C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '7A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '7B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '7C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '8A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '8B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '8C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '9A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '9B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '9C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '10A',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '10B',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '10C',
    //             type: 'left_chair',
    //             status: 0
    //         },
    //         {
    //             set: '1D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '1E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '1F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '2D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '2E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '2F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '3D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '3E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '3F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '4D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '4E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '4F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '5D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '5E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '5F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '6D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '6E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '6F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '7D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '7E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '7F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '8D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '8E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '8F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '9D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '9E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '9F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '10D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '10E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '10F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '11D',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '11E',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //         {
    //             set: '11F',
    //             type: 'right_chair',
    //             status: 0
    //         },
    //     ]

    //     axiosClient.post('/insert-set', sets)
    //     .then(({data}) => {
    //         console.log(data)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    // useEffect(() => {
    //     
    // })

  return (
    <div className='bg-white shadow-sm h-fit md:w-full sm:w-full sm:scroll-auto px-5 py-2 rounded sm:overflow-scroll lg:overflow-hidden md:overflow-auto'>
       <h1 className='text-md mb-4 font-bold tracking-wide'>{title}</h1>

       <div className='flex items-center justify-between mb-4'>
            <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-3 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>
                <input type="search" id="default-search" onClick={search_width} className={(search ? 'w-[90%]' : 'w-[50px]') + " transition-all ease-in-out block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ml-2"} required />
            </div>

            <button className='rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiPrinter/> &nbsp;Print</button>
        </div>

       <table className='md:table-auto w-full bg-gray-100 text-sm'>
            {loading && <Spiral/>}
            {!loading && <> <thead className=' py-5'>
                <tr>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>#</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>Name</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>AGE</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>SEX</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>TYPE</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>SET NUMBER</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>OPTIONS</td>
                </tr>
            </thead>
            <tbody>
                {
                    manifest.map((data, id) => (
                        <tr className='p-5 border border-b-2 hover:bg-gray-300 pointer mb-5' key={data.passengers_id}>
                            <td className='px-5 py-2'>{id + 1}</td>
                            <td className='text-md px-5 py-2 font-medium'>
                                <div>
                                    <span className='capitalize'><Link to={`/passenger/profile/${data.passengers_id}/details`} className='text-blue-500'>{data.last_name + ' ' + data.first_name}</Link></span><br />
                                    <span className='text-gray-500'>{data.contact_number}</span>
                                </div>
                            </td>
                            <td className='text-sm px-5 py-2 text-gray-500'>
                                <span>{data.age}</span>
                            </td>
                            <td className='text-sm px-5 py-2 text-gray-500'>
                                <span>{data.gender}</span>
                            </td>
                            <td className='text-sm px-5 py-2 text-gray-500'>

                                {data.type == 'Student' && <span className='rounded-[10px] bg-gray-300 text-gray-500 px-2 text-sm capitalize'>{data.type}</span>}
                                {data.type == 'Regular' && <span className='rounded-[10px] bg-red-300 text-red-500 px-2 text-sm capitalize'>{data.type}</span>}
                                {data.type == 'Senior' && <span className='rounded-[10px] bg-blue-300 text-blue-500 px-2 text-sm capitalize'>{data.type}</span>}
                                {data.type == 'PWD' && <span className='rounded-[10px] bg-green-300 text-green-500 px-2 text-sm capitalize'>{data.type}</span>}

                            </td>
                            <td className='text-sm px-5 py-2 text-gray-500'>
                                <span>{data.set_number}</span>
                            </td>
                            <td className='text-md px-5 py-2x text-gray-500'>
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
                                            'flex items-center px-4 py-2 text-sm w-full text-md font-semibold'
                                        )}
                                        // to={'/passenger/profile/' + u.id + '/details'}
                                        >
                                        Rebook
                                        </Link>
                                    )}
                                    </Menu.Item>
                                    <Menu.Item >
                                    {({ active }) => (
                                        <button
                                        className={classNames(
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'flex items-center px-4 py-2 text-sm w-full text-md font-semibold'
                                        )}
                                        onClick={ev => handle(1)}
                                        >
                                        Refund
                                        </button>
                                    )}
                                    </Menu.Item>
                                </div>
                                </Menu.Items>
                            </Transition>
                            </Menu>
                            </td>
                        </tr>
                    ))
                }
                
            </tbody> </>}
       </table>
       
       {children}
    </div>
  )
}