import React from 'react'
import * as FaIcon from "react-icons/fi";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Table from './Table';

export default function RecentlyAdded() {
    let title = 'Requests'

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const handle = (id) => {
        alert(id)
    }

  return (
    <div className='md:w-full bg-white rounded px-5 py-5 mt-[20px]'>
        <h1 className='text-xl mb-4 font-bold tracking-wide'>{title} &nbsp;
            <span className="inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
            20
            </span>
        </h1>

        <Table/>
        
    </div>
  )
}
