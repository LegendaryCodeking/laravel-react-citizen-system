import React, { useEffect, useState } from 'react'
import * as FaIcon from "react-icons/fi";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axiosClient from '../axiosClient';
import Table from './Table';
import PeopleTable from './Tables/PeopleTable';
import Spiral from './Spiral/Spiral';

export default function RecentlyAdded({data, link, checked = false, title, string}) {

    const [passengers, setPassengers] = useState([]);
    const [loading, setLoading] = useState(true);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const handle = (id) => {
        alert(id)
    }

    // useEffect(() => {
    //     getPassengers()
    // }, [])

    // const getPassengers = () => {
    //     axiosClient.get(link)
    //     .then(({data}) => {
    //         setLoading(false)
    //         setPassengers(data.data)
    //         console.log(data.data)
    //     })
    // }


  return (
    <div className='md:w-full bg-white h-fit rounded px-2 py-2'>
        <h1 className='text-xl mb-4 font-bold tracking-wide'>{title} &nbsp;
            {title != '' && <span className="inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
            20
            </span>}
        </h1>

        <PeopleTable>

{/*             
            {loading && 
                <Spiral/>
            }


            {!loading && 
                <Table passengers={passengers} checked={checked} string={string}/>
            } */}

        </PeopleTable>

       
        
    </div>
  )
}
