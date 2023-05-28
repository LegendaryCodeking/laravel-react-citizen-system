import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../Context/ContextProvider'
import { toast, ToastContainer } from 'react-toastify';
import signup from '../../assets/images/signup.png'

export default function GuestLayout() {

  const {user_token, notification} = useStateContext();

   const toastError = (text) => {
    toast.error(text, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
    });
  }

  if(user_token){
    return <Navigate to={'/dashboard'}/>
  }


  return (
    <div className=' md:w-full md:h-[100vh] bg-white' >
      <ToastContainer/>

      <div className='flex flex-row gap-2 lg:py-10 sm:py-0'>
        <div className='w-full items-center justify-between sm:hidden md:flex py-14'>
          <img src={signup} className='h-full w-full ml-10' alt="" />
        </div>
        <Outlet/>
      </div>
    </div>
  )
}
