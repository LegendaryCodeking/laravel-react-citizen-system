import React from 'react'
import * as FaIcon from "react-icons/fi";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Table({checked}) {

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    console.log(checked)

    const handle = (id) => {
        alert(id)
    }

  return (
    

        <table className='md:table-auto w-full bg-gray-100 text-sm'>
            <thead className=' py-5'>
                <tr>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>NAME</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>ADDRESS</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>TYPE</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>DATE</td>
                    <td className='text-sm text-gray-500 font-medium px-5 py-2'>OPTIONS</td>
                </tr>
            </thead>

            <tbody>
                <tr className='p-5 border border-b-2 hover:bg-gray-300 pointer mb-5'>
                    <td className='text-md px-5 py-2 font-medium flex gap-5 items-center'>
                        {checked && <div><input type="checkbox" className='border border-2-gray-500 rounded' name="" id="multiple_check" /></div>}
                        <div>
                            <img src="./public/images/image-1.jpg" alt="" className='sm:h-10 w-10 rounded-full'/>
                        </div>
                        <div>
                            <span>Neil Bryan Gaviola</span><br />
                            <span className='text-gray-500'>09360944819</span>
                        </div>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>Agutay, Maripipi, Biliran</td>
                    <td className='text-sm px-5 py-2 text-gray-500'>
                        <span className='rounded-[10px] bg-gray-300 text-red-500 px-2 text-sm'>STUDENT</span>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>05-03-2023</td>
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
                                <Menu.Item >
                                {({ active }) => (
                                    <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm w-full'
                                    )}
                                    onClick={ev => handle(1)}
                                    >
                                    <FaIcon.FiEye/>&nbsp; View
                                    </button>
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
                <tr className='p-5 border border-b-2 hover:bg-gray-300 pointer mb-5'>
                    <td className='text-md px-5 py-2 font-medium flex gap-5 items-center'>
                        {checked && <div><input type="checkbox" className='border border-2-gray-500 rounded' name="" id="multiple_check" /></div>}
                        <div>
                            <img src="./public/images/image-2.jpg" alt="" className='sm:h-10 w-10 rounded-full'/>
                        </div>
                        <div>
                            <span>April Joy Gutierrez</span><br />
                            <span className='text-gray-500'>093609442222</span>
                        </div>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>Binalayan West, Maripipi, Biliran</td>
                    <td className='text-sm px-5 py-2 text-gray-500'>
                        <span className='rounded-[10px] bg-blue-300 text-green-500 px-2 text-sm'>REGULAR</span>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>05-03-2023</td>
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
                            <Menu.Item >
                                {({ active }) => (
                                    <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
                                    )}
                                    onClick={ev => handle(1)}
                                    >
                                    <FaIcon.FiEye/> &nbsp; View
                                    </button>
                                )}
                                </Menu.Item>
                                <Menu.Item >
                                {({ active }) => (
                                    <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
                                    )}
                                    onClick={ev => handle(1)}
                                    >
                                    <FaIcon.FiTrash/> &nbsp; Delete
                                    </button>
                                )}
                            </Menu.Item>
                            </div>
                            </Menu.Items>
                        </Transition>
                        </Menu>
                    </td>
                </tr>
                <tr className='p-5 border border-b-2 hover:bg-gray-300 pointer mb-5'>
                    <td className='text-md px-5 py-2 font-medium flex gap-5 items-center'>
                        {checked && <div><input type="checkbox" className='border border-2-gray-500 rounded' name="" id="multiple_check" /></div>}
                        <div>
                            <img src="./public/images/image-3.jpg" alt="" className='sm:h-10 w-10 rounded-full'/>
                        </div>
                        <div>
                            <span>Juan Dela Cruz</span><br />
                            <span className='text-gray-500'>0936094555</span>
                        </div>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>Canduhao, Maripipi, Biliran</td>
                    <td className='text-sm px-5 py-2 text-gray-500'>
                        <span className='rounded-[10px] bg-pink-300 text-red-500 px-2 text-sm'>PWD</span>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>05-03-2023</td>
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
                                <Menu.Item >
                                {({ active }) => (
                                    <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
                                    )}
                                    onClick={ev => handle(1)}
                                    >
                                    <FaIcon.FiEye/> &nbsp; View
                                    </button>
                                )}
                                </Menu.Item>
                                <Menu.Item >
                                {({ active }) => (
                                    <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
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
                <tr className='p-5 border border-b-2 hover:bg-gray-300 pointer mb-5'>
                    <td className='text-md px-5 py-2 font-medium flex gap-5 items-center'>
                        {checked && <div><input type="checkbox" className='border border-2-gray-500 rounded' name="" id="multiple_check" /></div>}
                        <div>
                            <img src="./public/images/image-4.jpg" alt="" className='sm:h-10 w-10 rounded-full'/>
                        </div>
                        <div>
                            <span>Andrew Rosales</span><br />
                            <span className='text-gray-500'>0978451155</span>
                        </div>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>Tucdao, Kawayan, Biliran</td>
                    <td className='text-sm px-5 py-2 text-gray-500'>
                        <span className='rounded-[10px] bg-blue-300 text-red-500 px-2 text-sm'>SENIOR CITIZEN</span>
                    </td>
                    <td className='text-md px-5 py-2x text-gray-500'>05-03-2023</td>
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
                                <Menu.Item >
                                {({ active }) => (
                                    <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
                                    )}
                                    onClick={ev => handle(1)}
                                    >
                                    <FaIcon.FiEye/> &nbsp; View
                                    </button>
                                )}
                                </Menu.Item>
                                <Menu.Item >
                                {({ active }) => (
                                    <button
                                    className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'flex items-center px-4 py-2 text-sm'
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
            </tbody>
        </table>
  )
}
