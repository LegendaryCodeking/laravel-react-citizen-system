import React, { useEffect } from 'react'
import { Navigate ,Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
import { useStateContext } from '../../Context/ContextProvider'
import axiosClient from '../../axiosClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function MainLayout() {
  const {user_token, setUser, user, passengers, setPassengers, notification} = useStateContext();

  if(!user_token){
    return <Navigate to={'/'}/>
  }else{
    if(notification){
      toast.success(notification, {
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
  }

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
        setUser(data)
      })

    // axiosClient.get('/get-passengers')
    //   .then(({passengers}) => {
    //     setPassengers(passengers)
    //   })
  }, [])

  return (
    <div>
         <ToastContainer/>
        <SideBar passengers={passengers}>
          <Outlet/>
        </SideBar>
      
    </div>
  )
}
