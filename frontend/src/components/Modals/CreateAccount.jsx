import React, { useState } from 'react'

export default function CreateAccount({id}) {

    const [showModal, setShow] = useState(false);
    const [errors, setErrors] = useState([]);

  return (
    <>
          <button onClick={() => setShow(true)} className='w-[80%] bg-blue-500 text-white text-lg font-md mt-6 p-2 rounded hover:bg-yellow-500 hover:text-white border hover:border-5-blue-500'>Create Account</button>

          {showModal ? (
        <>
          <div
            className=" transition-all ease-in-out justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-3xl relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 border-b border-solid bg-blue-500 border-slate-200 rounded-t">
                  <h3 className="text-lg text-white font-semibold">
                    CREATE ACCOUNT
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

                <div className='w-[600px] text-green-700 text-sm rounded mb-6 p-2 bg-green-300'>
                    By creating your account, you can login and monitor your profile and view your QR CODE
                </div>
                  
                <div className="mb-6 md:w-[600px] sm:w-[400px]">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Email</label>
                    <input readOnly value={id.email} type="text" id="first_name" className="bg-gray-50 border read-only:border-gray-200 read-only:bg-blue-200 read-only:text-blue-800  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email"/>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Create Password</label>
                    <input type="password" id="first_name" className={(errors.password ? 'border-red-500' : 'border-gray-300') + " active:text-gray-200 bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:text-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Create Password"/>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Confirm Password</label>
                    <input type="password" id="first_name" className={(errors.password_confirmation ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 focus:text-gray-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Confirm Password"/>
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
                  <button
                    className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-4 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShow(false)}
                  >
                    Create Account
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}
