import React, { useState } from 'react'

export default function IndentificationTab({passenger}) {

  const [show, setShow] = useState(false)
  const [image, setImage] = useState('')
  const [imageTitle, setImageTitle] = useState('')

  const openImage = (ev, title) => {
    setShow(true)
    setImage(ev)
    setImageTitle(title)
  }

  return (
    <div  className='mt-[20px] h-[300px] px-[100px] w-full flex lg:flex-row md:flex-col sm:flex-col lg:gap-[200px]'>
        <div className='flex gap-5'>
          <div className='w-[200px] h-[80%]'>
            <img onClick={(ev) => openImage(passenger.selfie, 'Selfie')} src={passenger.selfie} alt="" className='cursor-pointer h-full w-full rounded border hover:border-2 hover:border-blue-500' />
            <center><h1 className='text-black text-md font-2xl'>Selfie</h1></center>
          </div>
          <div className='w-[200px] h-[80%]'>
            <img onClick={(ev) => openImage(passenger.front_id, 'Front ID')} src={passenger.front_id} alt="" className='cursor-pointer h-full w-full rounded border hover:border-2 hover:border-blue-500' />
            <center><h1 className='text-black text-md font-2xl'>Front ID</h1></center>
          </div>
          <div className='w-[200px] h-[80%]'>
            <img onClick={(ev) => openImage(passenger.back_id, 'Back ID')} src={passenger.back_id} alt="" className='cursor-pointer h-full w-full rounded border hover:border-2 hover:border-blue-500' />
            <center><h1 className='text-black text-md font-2xl'>Back ID</h1></center>
          </div>

          {
            passenger.type == 'student' && 
            <div className='w-[200px] h-[80%]'>
              <img onClick={(ev) => openImage(passenger.study_load, 'Study Load')} src={passenger.study_load} alt="" className='cursor-pointer h-full w-full rounded border hover:border-2 hover:border-blue-500' />
              <center><h1 className='text-black text-md font-2xl'>Study Load</h1></center>
            </div>
          }
        </div>


        {show && <>
            <div
                className="transition-all ease-in-out justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-3xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-2 border-b border-solid bg-blue-500 border-slate-200 rounded-t">
                    <h3 className="text-lg text-white font-semibold uppercase">
                        {imageTitle}
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
                        <img src={image} alt="" className='h-full w-full' />
                      </div>


                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                    <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShow(false)}
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>}
    </div>
  )
}
