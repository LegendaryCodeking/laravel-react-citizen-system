import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import LogoForm from '../../components/LogoForm'
import axiosClient from '../../axiosClient';

export default function Register() {
  
  const firstname = useRef();
  const lastname = useRef();
  const email_input = useRef();
  const middleInitial = useRef();
  const age_input = useRef();
  const contactNumber = useRef();
  const citizenship_input = useRef();
  const religion_input = useRef();

  const [province, setProvince] = useState()
  const [city, setCity] = useState()
  const [brgy, setBrgy] = useState()
  const [date, setDate] = useState()
  const [gender_input, setGender] = useState()
  const [status, setStatus] = useState()
  const [type, setType] = useState()

  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const add = brgy +' '+' '+ city +' '+ province
    const data = {
        first_name: firstname.current.value,
        last_name: lastname.current.value,
        email: email_input.current.value,
        contact_number: contactNumber.current.value,
        middle_initial: middleInitial.current.value,
        gender: gender_input,
        religion: religion_input.current.value,
        citizenship: citizenship_input.current.value,
        age: age_input.current.value,
        birthdate: date,
        status: status,
        type: type,
        address: add
    }

    axiosClient.post('/register', data)
        .then(({data}) => {
            setLoading(false)
            if(data.response === 200){
                navigate('/registration-step/' + data.id)
            }
        })
        .catch(err => {
            const response = err.response
            setLoading(false)
            if(response && response.status === 422){
              setErrors(response.data.errors)
            }
        })

    console.log(data)
  }

  return (
    <FormContainer>

        <div className='w-full'>

            <LogoForm/>

            <form action="" className='px-[50px]' onSubmit={onSubmit}>
                <h1 className='text-lg font-bold text-[#0755A2]'>Register</h1>
                <p className='text-sm font-sm text-gray-500'>Please enter your account details</p>

                <div className='mt-5 mb-6'>
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Name</label>
                    <div className='grid gap-2 mb-6 md:grid-cols-3 lg:grid-cols-[200px_minmax(200px,_1fr)_100px]'>
                        <div>
                            <input ref={firstname} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Last Name" required/>
                        </div>
                        <div>
                            <input ref={lastname} type="text" id="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="First Name" required/>
                        </div>
                        <div className='lg:w-[60px]'>
                            <input ref={middleInitial} type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="MI" required/>
                        </div>  
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Email</label>
                    <input ref={email_input} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required/>
                </div>

                <div className='mb-6'>
                    <label for="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Address</label>
                    <div className='grid gap-2 mb-6 md:grid-cols-3'>
                        <div>
                            <select onChange={(ev) => setProvince(ev.target.value)}  id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Provice</option>
                                <option value="biliran">Biliran</option>
                            </select>
                        </div>
                        <div>
                            <select onChange={(ev) => setCity(ev.target.value)} id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>City/Municipality</option>
                                <option value="maripipi">Maripipi</option>
                            </select>
                        </div>
                        <div className=''>
                            <select onChange={(ev) => setBrgy(ev.target.value)} id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option value="" selected>Barangay</option>
                                <option value="binalayan west">Binalayan West</option>
                            </select>
                        </div>  
                    </div>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Age</label>
                    <input ref={age_input} type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="No #" required/>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Birthdate</label>
                    <input onChange={(ev) => setDate(ev.target.value)} type="date" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09**********" required/>
                </div>


                <div className="mb-6">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Contact Number</label>
                    <input ref={contactNumber} type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09**********" required/>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Gander</label>
                    <select onChange={(ev) => setGender(ev.target.value)} id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Gender</option>
                        <option value="male" selected>Male</option>
                        <option value="female" selected>Female</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Citizenship</label>
                    <input ref={citizenship_input} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Citizenship" required/>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Religion</label>
                    <input ref={religion_input} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Religion" required/>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Status</label>
                    <select onChange={(ev) => setStatus(ev.target.value)} id="" name="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="" selected>Status</option>
                        <option value="Single" selected>Single</option>
                        <option value="Married" selected>Married</option>
                        <option value="Widow" selected>Widow</option>
                    </select>
                </div>

                <div className="flex mb-6 gap-3">
                    <div className="flex gap-2">
                        <input onChange={(ev) => setType(ev.target.value)} id="regular" type="radio" value="regular" name="default-radio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <label htmlFor="regular" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Regular</label>
                    </div>
                    <div className="flex gap-2">
                        <input onChange={(ev) => setType(ev.target.value)} id="student" type="radio" value="student" name="default-radio" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        <label htmlFor="student" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Student</label>
                    </div>
                    <div className="flex gap-2">
                        <input onChange={(ev) => setType(ev.target.value)} id="senior" type="radio" value="senior" name="default-radio" className=""/>
                        <label htmlFor="senior" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Senior</label>
                    </div>
                    <div className="flex gap-2">
                        <input onChange={(ev) => setType(ev.target.value)} id="pwd" type="radio" value="pwd" name="default-radio" className=""/>
                        <label htmlFor="pwd" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">PWD</label>
                    </div>
                </div>

                <div className="mb-6 w-full">
                   <button className={(loading ? 'cursor-not-allowed bg-white' : 'bg-blue-500') + ' active:bg-gray-100 text-white w-full p-2 text-lg font-md rounded hover:bg-yellow-500 hover:text-white border hover:border-5-blue-500'}>{loading ? 'loading.....' : 'Next'}</button>
                </div>

            </form>

        </div>


    </FormContainer>
  )
}
