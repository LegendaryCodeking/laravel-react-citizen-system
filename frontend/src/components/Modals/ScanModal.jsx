import React, { useEffect, useState } from 'react'
import * as FaIcon from "react-icons/fi"; 
import {QrScanner} from '@yudiel/react-qr-scanner';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axiosClient from '../../axiosClient';
import { useNavigate } from 'react-router-dom';
import ProfileTab from '../../view/Tabs/ProfileTab';
import IndentificationTab from '../../view/Tabs/IndentificationTab';
import ChairModal from './ChairModal';


export default function ScanModal({date}) {
    const [show, setShow] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const [loading, setLoading] = useState(false)
    const [tab, setTab] = useState('')
    const [manifest_id, setManifestId] = useState(null)

    const [qrscan, setQrscan] = useState('No result');
    const [qrCodeData, setQrCodeData] = useState(null);
    const [passenger, setPassenger] = useState([])
    const [media, setMedia] = useState([])
    const [chair, setChair] = useState(false)

    const navigate = useNavigate()

    const loadingToast = (title) => {
        Swal.fire({
          title: title,
          didOpen: () => {
            Swal.showLoading()
          }
        })
      }

    const hideLoadingToast = () => {
      Swal.fire({
        showConfirmButton: false,
        didOpen: () => {
          Swal.hideLoading()
        }
      })
    }

    const alertMessage = (text, icon) =>{
      Swal.fire({
        icon: icon,
        text: text,
        showConfirmButton: true,
        confirmButtonColor: 'red'
      })
    }

    const handleScan = (result) => {
      
        Swal.fire({
          didOpen: () => {
            Swal.showLoading()
          }
        })
       setShow(false)

        axiosClient.get(`/profile_passengers?qr=${result}`)
            .then(({data}) => {
               // setLoading(false)

               Swal.fire({
                title: data.data.last_name + ' ' + data.data.first_name,
                didOpen: () => {
                  Swal.hideLoading()
                }
              })
               setTab('details')
               console.log(data)
                setPassenger(data.data)
                setMedia(data.image)
                setShowProfile(true)
            })
            .catch(err => {
                setLoading(false)
            })
      
    };

    const handleTab = (ev) => {

        setTab(ev)
        
    }

    const handleNext = () => {

      var data = {}

      Swal.fire({
        text: 'Continue Booking as?',
        input: 'select',
        inputOptions: {
          'student' : 'Student',
          'regular' : 'Rugular',
          'senior' : 'Senior',
          'pwd' : 'PWD',
        },
        inputPlaceholder: passenger.type,
        showCancelButton: true,
        cancelButtonColor: 'red',
        confirmButtonColor: 'blue',
        confirmButtonText: 'Continue',
        inputValidator: (value) => {
          return new Promise((resolve) => {
            if (value !== '') {
              //value has change
              data = {
                'passengers_id': passenger.id,
                'manifest_dates_id': date,
                'type': value
              }
              
            } else {
              //no change of value
              data = {
                'passengers_id': passenger.id,
                'manifest_dates_id': date,
                'type': passenger.type
              }
            }
            axiosClient.post('/store-manifest-data', data)
              .then(({data}) => {
                console.log(data)
                if(data.status == 200){
                  resolve()
                  setManifestId(data.id)
                  setShowProfile(false)
                  setChair(true)
                }
                if(data.status == 422){
                  hideLoadingToast()
                  alertMessage('Something went wrong, please try again!', 'error')
                }

                if(data == 403){
                  alertMessage('Passenger already booked!', 'warning')
                }
              })
              .catch(err => {
                console.log(err)
                hideLoadingToast()
                alertMessage('Something went wrong, please try again!', 'warning')
              })

          })
        }
      })
    }
  
    console.log(date)

    // if(loading){
    //     loadingToast('Processing....')
    // }

  return (
    <>
        
        <button onClick={(ev) => setShow(true)} className='w-full rounded text-gray-500 border border-2-gray-500 hover:bg-sky-500 hover:text-white px-5 py-2 flex items-center'><FaIcon.FiCamera/> &nbsp;Scan QR</button>

        {show ? ( 
        <>
         <div
            className="delay-150 transition-all ease-in-out justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-3xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid bg-blue-500 border-slate-200 rounded-t">
                  <h3 className="text-lg text-white font-semibold">
                    SCAN QR CODE
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShow(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">

                    <div className='w-[500px] h-[500px]'>
                    <QrScanner
                        onDecode={(result) => handleScan(result)}
                        onError={(error) => console.log(error?.message)}
                    />
                    </div>

                <h1>{qrCodeData}</h1>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(ev) => setShow(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}

        {showProfile ?
            <>
                <div
                    className="delay-150 transition-all ease-in-out justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-3xl relative flex flex-col w-[900px] bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2 border-b border-solid bg-blue-500 border-slate-200 rounded-t">
                        <h3 className="text-lg text-white font-semibold">
                            <span className='capitalize'>{passenger.last_name + ' ' + passenger.first_name + ' ' + passenger.middle_initial}</span>
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShow(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto bg-gray-200">
                            <div className='w-full bg-white shadow-md '>
                                <div className='flex flex-col items-center justify-center bg-yellow-300 py-2'>
                                    <img src={media.selfie} alt="" className='border border-5 border-white rounded-full h-[200px] w-[2  00px]' />

                                    <div className='px-2 py-1 text-center'>
                                        <h1 className='text-black text-2xl font-lg font-bold capitalize'>{passenger.last_name} {passenger.first_name} {passenger.middle_initial}</h1>
                                        <p className='text-white text-sm'>{passenger.email}</p>
                                    </div>
                                </div>

                                <div className='rounded mt-5 w-full overflow-auto'>
                                    <div className='w-full'>
                                        <ul className='flex items-center justify-center gap-5 '>
                                            <li className={(tab == 'details' && 'border-b-4 border-black') + ' tracker-wider py-3 text-md font-bold'} onClick={(ev) => handleTab('details')}>Passenger Details</li>
                                            <li className={(tab == 'identification' && 'border-b-4 border-black') + ' tracker-wider py-3 text-md font-bold'} onClick={(ev) => handleTab('identification')}>Identifications</li>
                                        </ul>

                                        {
                                            tab == 'details' && <ProfileTab passenger={passenger}/>
                                        }

                                        {
                                            tab == 'identification' && <IndentificationTab passenger={media} student={passenger.type}/>
                                        }
                                    </div>
                                </div>
                            </div>

                        <h1>{qrCodeData}</h1>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={(ev) => setShowProfile(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleNext}
                        >
                            Next
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </> : null
        }

        {chair ?
            <>
                <div
                    className="delay-150 transition-all ease-in-out justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-3xl relative flex flex-col w-[900px] bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-2 border-b border-solid bg-blue-500 border-slate-200 rounded-t">
                        <h3 className="text-lg text-white font-semibold">
                            <span className='capitalize'>ASSIGN SEATS</span>
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShow(false)}
                        >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            ×
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto bg-gray-200">
                            <div className='w-full bg-white shadow-md flex items-center justify-center p-5 rounded'>
                               <ChairModal manifest_id={manifest_id}/>
                            </div>

                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={(ev) => setChair(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            
                        >
                            Next
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </> : null
        }
    </>
  )
}
