import React from 'react'
import * as FaIcon from "react-icons/fi";
import Option from './Option';
import DateInput from './DateInput';
import TicketingTable from './Tables/TicketingTable';
import { useState } from 'react';
import { useRef } from 'react';

export default function Menu() {

    const [date, _setDate] = useState()
    const [final, seFinal] = useState(false)

    const setDate = (ev) => {
        _setDate(ev)
        console.log(date)
    }

    const finalDate = () => {
        seFinal(true)
    }


    
  return (
    <div className='flex gap-2'>
        <div className='bg-white shadow-sm h-fit h-[100%] md:w-[40%] px-5 py-2 rounded'>
            <h1 className='text-md mb-4 font-bold tracking-wide'>Ticketing Menu</h1>

            <table className='md:table-auto w-full text-sm mt-2'>
                <tbody>
                <tr>
                    <td className='text-gray-500 flex items-center cursor-pointer p-3'>
                        <div className='flex items-center justify-between gap-2 w-full'>
                            {final && <div className='w-full border rounded-[5px] border-gray-300 text-gray-500 py-2 px-5'>
                                {new Date(date).toLocaleString() + ""}
                            </div>}

                            {!final && (<input onChange={ev => setDate(ev.target.value)} type="datetime-local" className='w-full border rounded-[5px] border-gray-300 text-gray-500'/>)}

                            {!final && (<button onClick={finalDate} className='w-[30%] rounded text-gray-500 border border-2-gray-500 bg-sky-500 p-2.5 text-white flex items-center'><FaIcon.FiSave/> &nbsp;Save</button>)}
                        </div>
                    </td>
                    <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                        <button className='w-full rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiCamera/> &nbsp;Scan QR</button>
                    </td>
                    <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                        <button className='w-full rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiPaperclip/> &nbsp;Manual</button>
                    </td>
                    <td className='text-gray-500 flex items-center cursor-pointer hover:bg-sky-200 p-3'>
                        <button className='w-full rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiPrinter/> &nbsp;Print Manifest</button>
                    </td>
                    <td className='text-gray-500 flex items-center cursor-pointer p-3'>
                        <select name="" id="" className='w-full border rounded-[5px] border-gray-300 text-gray-500'>
                            <option value="maripipi-naval" selected><FaIcon.FiArrowUp/> Maripipi-Naval</option>
                            <option value="maripipi-naval">Naval-Maripipi</option>
                            <option value="maripipi-naval">Naval-Higatanga</option>
                            <option value="maripipi-naval">Higatangan-Naval</option>
                        </select>
                    </td>
                    
                </tr>
                </tbody>
            </table>
        </div>
        <TicketingTable title={new Date(date).toLocaleString() + ""}/>
    </div>
  )
}
