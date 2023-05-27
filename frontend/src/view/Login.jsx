import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axiosClient';
import { useStateContext } from '../Context/ContextProvider';
import { ToastContainer, toast } from 'react-toastify';
import logo from "../assets/images/logo-2.jpg"
import * as FaIcon from 'react-icons/fa'

export default function Login() {

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const { user, user_token,setUser, setUserToken, setNotification} = useStateContext()
  const user_email = useRef()
  const user_password = useRef()

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


  const login = (event) => {
    event.preventDefault()
    setLoading(true)

    const payload = {
      'email': user_email.current.value,
      'password': user_password.current.value,
    }

    axiosClient.post('/user-login', payload)
      .then(({data}) => {
        console.log(data.user_token)
        setLoading(false)
        setUser(data.user)
        setUserToken(data.user_token)
      })
      .catch(error_reponse => {
        setLoading(false)
        const response = error_reponse.response.data.errors
        const status = error_reponse.response.status

        if(response || status === 422){
          if(response){
            setErrors(response)
          }else{
            setErrors({error : [error_reponse.response.data.message_error]})
            setNotification(error_reponse.response.data.message_error)
          }
        }
      })
  }




  return (

    <div className='flex justify-between items-center h-full px-4'>
      <ToastContainer/>
      <div className='hidden lg:block'></div>
      <div className='mt-2 flex flex-col items-center shadow-md md:h-[90%] sm:h-screen sm:w-screen sm:px-0 sm:py-0 lg:w-[35%] bg-gradient-to-b from-[#4f46e5] to-[#4f46e5] rounded-[10px]'>

          <div className='flex items-center justify-center py-10 px-3'>
            <img src={logo} alt="" className='h-[90px] rounded'/>
          </div>

          <center><h1 className='mt-[10px] text-gray-200 text-4xl font-medium tracker-wide'>Welcome Back</h1></center>

          <div className='md:flex items-center gap-2 px-5 mt-[20px]'>
            <div className='bg-gray-300 md:w-[100px] md:h-[1px]'></div>
            <div className='text-gray-300'><h1>Log In To Your Account </h1></div>
            <div className='bg-gray-300 md:w-[100px] md:h-[1px]'></div>
          </div>

          <form action="" className='md:w-full mt-6 md:px-[60px] text-sm' onSubmit={login}>
            {errors && 
              <div className='bg-red-500 text-white transition-all ease-in-out delay-75 bg-[200px] px-1 py-1 mb-1 rounded'>
                {Object.keys(errors).map(key => (
                  <p key={key}>{errors[key][0]}</p>
                ))}
              </div>
            }

            <div className='mb-7'>
              <label htmlFor="first_name" className="block mb-1 text-md font-medium text-gray-200">Username</label>
              <input ref={user_email} type="text" id="first_name" className="bg-inherit border border-gray-200 text-white text-md placeholder-gray-200 rounded-lg focus:border-blue-500 block w-full py-3" placeholder="Username" />
            </div>

            <div className='mb-7'>
              <label htmlFor="first_name" className="block mb-1 text-md font-medium text-gray-200">Password</label>
              <input ref={user_password} type="Password" id="first_name" className="bg-inherit border border-gray-200 text-white text-md placeholder-gray-200 rounded-lg focus:border-blue-500 block w-full py-3" placeholder="Password" />
            </div>

            <div className='sm:flex gap-2 sm:flex-col-2 items-center justify-between mb-7'>
              <div className='flex items-center gap-2'>
                <input type="checkbox" name="" id="keep_me_login" className='border border-gray-200 rounded' />
                <label htmlFor="keep_me_login" className='text-md font-sm text-gray-300 cursor-pointer'>Keep me logged in</label>
              </div>
              <div>
                <Link to={'/forgot-password'} className='text-gray-200 font-sm text-md'>Forgot Your Password?</Link>
              </div>
            </div>

            <div className='flex items-center w-full text-center mb-5'>
              <button className='text-blue-500 bg-white w-full p-3 rounded text-md font-bold tracker-wider hover:bg-inherit hover:text-gray-200 border hover:border-gray-200'>

                
              <div className='flex items-center justify-center gap-2'>

                  {loading && <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                  </svg>}

                  {loading ? 'loading.....' : 'Next'}

              </div>

              </button>
            </div>

          </form>

      </div>
      
    </div>
  )
}
