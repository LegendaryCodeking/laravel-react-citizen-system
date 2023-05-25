import React, { useEffect } from 'react'
import * as FaIcon from "react-icons/fi";
import Option from './Option';
import TicketingTable from './Tables/TicketingTable';
import { useState } from 'react';
import { useRef } from 'react';
import ScanModal from './Modals/ScanModal';
import axiosClient from '../axiosClient';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import TableSpiral from './Spiral/TableSpiral';

export default function Menu() {

    const [date, _setDate] = useState('')
    const [dateId, setDateId] = useState()
    const [route, setRoute] = useState('')
    const [final, seFinal] = useState(false)
    const [manifestAction, _setAction] = useState()
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true)
    const [manifest, setManifest] = useState([])

    const setDate = (ev) => {
        _setDate(ev)
    }

    const finalDate = () => {
        seFinal(true)
    }


    const setAction = () => {

        if(route == '' || date == ''){
            Swal.fire({
                icon: 'error',
                text: 'Please Enter Date and Route!',
                confirmButtonColor: 'blue'
            })
        }else{

            Swal.fire({
                title: 'Processing',
                didOpen: () => {
                  Swal.showLoading()
                }
            })

            const data = {
                date: date,
                route: route
            }

            axiosClient.post('/store-manifest', data)
                .then(({data}) => {
                    if(data.status == 200){
                        Swal.fire({
                            icon: 'success',
                            text: 'New Manifest Created Successfully!',
                            confirmButtonColor: 'blue',
                            confirmButtonText: 'Continue'
                        })
                        .then((result) => {
                            result.isConfirmed && window.location.reload()
                        })
                    }
                })
                .catch(err => {
                    console.log(err)
                })

        }
    }

    useEffect(() => {

        axiosClient.get('/manifest-action')
            .then(({data}) => {
                // console.log(data.action)
                setLoading(false)
                _setAction(data.action)
                if(data.manifestDate){
                    setDate(data.manifestDate.date)
                    setDateId(data.manifestDate.id)
                    setRoute(data.manifestDate.route)
                }
                
            })
            .catch(err => {
                setLoading(false)
                _setAction(false)
            })

            axiosClient.get(`/get-passenger-manifest?id=${dateId}`)
            .then(({data}) => {
                console.log(data)
                setManifest(data)
            })
    })


    
  return (
    <div className='flex gap-2'>
        <div className='bg-white shadow-sm h-fit h-[100%] md:w-[40%] px-5 py-2 rounded md:block lg:block sm:hidden'>
            <h1 className='text-md mb-4 font-bold tracking-wide'>Ticketing Menu</h1>

            <table className='md:table-auto w-full text-sm mt-2'>
                <tbody>
                {loading && <TableSpiral/>}
                <tr>
                    <td className='text-gray-500 flex items-center cursor-pointer p-3'>
                    {manifestAction == 'false' && <select onChange={ev => setRoute(ev.target.value)} name="" id="" className='w-full border rounded-[5px] border-gray-300 text-gray-500'>
                            <option value="" selected><FaIcon.FiArrowUp/> Select Route</option>
                            <option value="maripipi-naval"><FaIcon.FiArrowUp/> Maripipi-Naval</option>
                            <option value="Naval-Maripipi">Naval-Maripipi</option>
                            <option value="Naval-Higatangan">Naval-Higatangan</option>
                            <option value="Higatangan-Naval">Higatangan-Naval</option>
                        </select>}

                        {manifestAction == 'true' && <div className='uppercase w-full border rounded-[5px] border-gray-300 text-gray-500 py-2 px-5'>
                                {route}
                            </div>}
                    </td>
                    <td className='text-gray-500 flex items-center cursor-pointer p-3'>
                        <div className='flex items-center justify-between gap-2 w-full'>
                            {manifestAction == 'true' && <div className='w-full border rounded-[5px] border-gray-300 text-gray-500 py-2 px-5'>
                                {new Date(date).toLocaleString() + ""}
                            </div>}

                            {manifestAction == 'false' && (<input onChange={ev => setDate(ev.target.value)} type="datetime-local" className='w-full border rounded-[5px] border-gray-300 text-gray-500'/>)}

                            {manifestAction == 'false' && (<button onClick={setAction} className='w-[30%] rounded text-gray-500 border border-2-gray-500 bg-sky-500 p-2.5 text-white flex items-center'><FaIcon.FiSave/> &nbsp;Save</button>)}
                        </div>
                    </td>
                    {manifestAction == 'true' && <>
                    <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>

                        <ScanModal date={dateId}/>

                    </td>
                    <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                        <button className='w-full rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiPaperclip/> &nbsp;Manual</button>
                    </td>
                    <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                        <button className='w-full rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiPrinter/> &nbsp;Print Manifest</button>
                    </td>
                    </>}
                    
                </tr>
                </tbody>
            </table>
        </div>
        <TicketingTable title={new Date(date).toLocaleString() + ""} loading={loading} dataId={dateId} manifest={manifest}>
            {manifestAction == 'true' &&
            <div className='mt-5 flex justify-between'>
                <div></div>
                <button className='bg-blue-500 text-white p-2 rounded flex items-center justify-center gap-2 hover:bg-yellow-300 hover:text-black'><FaIcon.FiSave/>Submit</button>
            </div>
            }
        </TicketingTable>
    </div>
  )
}