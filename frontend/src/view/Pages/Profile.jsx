import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axiosClient from '../../axiosClient';
import Image from '../../assets/images/image-3.jpg'
import profileImage from '../../assets/images/image-4.jpeg'
import Logo from '../../assets/images/logo-2.jpg'
import * as FaIcon from "react-icons/fa";
import ProfileTab from '../Tabs/ProfileTab';
import HeaderProfiletab from '../../components/TabComponents/HeaderProfiletab';
import IndentificationTab from '../Tabs/IndentificationTab';
import PasswordTab from '../Tabs/PasswordTab';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function Profile() {

    const {id} = useParams();
    const {tab} = useParams();

    const [loading, setLoading] = useState(true)
    const [passenger, setPassenger] = useState([])
    const [presentTab, setTab] = useState(false)
    const [show, setShow] = useState(false)

    if(id){
        useEffect(() => {
            axiosClient.get(`/passengers/${id}`)
                .then(({data}) => {
                    setLoading(false);
                    setPassenger(data.data);
                })
                .catch(() =>{
                    setLoading(false);
                })
        }, [])
    }

    

  return (
    <div className={(!loading ?  'bg-white shadow-md' : 'flex items-center justify-center p-10') + ' sm:w-[500px] lg:w-full rounded relative h-fit'}>

        {loading && <div role="status">
            <svg aria-hidden="true" className="w-[100px] h-[100px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>}

        {!loading && <>
            <div className='h-[200px] bg-[#4f46e5] w-full flex items-center justify-center p-5'>
                <img src={Logo} alt="" className='w-[70%] h-[80%] rounded' />
            </div>

            <div className='absolute h-[180px] w-[500px] top-[15%] lg:top-[18%] sm:top-[15%] md:top-[15%] left-4 flex'>

                <img src={passenger.selfie} alt="" className='bg-white h-[150px] w-[150px] rounded-full border border-4 border-white' />

                <div className='mt-[75px] px-2 py-1'>
                    <h1 className='text-black text-2xl font-lg font-bold capitalize'>{passenger.name} {passenger.middle_initial}</h1>
                    <p className='text-gray-500 text-sm'>{passenger.email}</p>
                </div>
            </div>

            <HeaderProfiletab tab={tab} passenger={passenger}/>

            {
                tab == 'details' && <ProfileTab passenger={passenger}/>
            }

            {
                tab == 'identification' && <IndentificationTab passenger={passenger}/>
            }

            {
                tab == 'password' && <PasswordTab passenger_id={passenger.id}/>
            }
        </>}

        
    </div>
  )
}
