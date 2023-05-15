import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../../Context/ContextProvider'
import { toast, ToastContainer } from 'react-toastify';

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
    <div className=' md:w-full md:h-[100vh] bg-[url("./public/background.svg")] bg-no-repeat bg-white' >
      <ToastContainer/>
      <Outlet/>
    </div>
  )
}
