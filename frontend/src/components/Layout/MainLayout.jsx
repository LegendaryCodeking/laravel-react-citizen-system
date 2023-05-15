import React, { useEffect } from 'react'
import { Navigate ,Outlet } from 'react-router-dom'
import SideBar from '../SideBar'
import { useStateContext } from '../../Context/ContextProvider'
import axiosClient from '../../axiosClient';

export default function MainLayout() {
  const {user_token, setUser, user, passengers, setPassengers} = useStateContext();

  if(!user_token){
    return <Navigate to={'/'}/>
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

        <SideBar passengers={passengers}>
          <Outlet/>
        </SideBar>
      
    </div>
  )
}
