import React, { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import FormContainer from '../../components/FormContainer'
import LogoForm from '../../components/LogoForm'
import axiosClient from '../../axiosClient';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
  
  const firstname = useRef();
  const lastname = useRef();
  const email_input = useRef();
  const middleInitial = useRef();
  const age_input = useRef();
  const contactNumber = useRef();
  const citizenship_input = useRef();
  const religion_input = useRef();
  const emergency_contact_person = useRef(''); 
  const emergency_contact_number = useRef('');
  const birthplace = useRef(''); 

  const [province, setProvince] = useState()
  const [city, setCity] = useState()
  const [brgy, setBrgy] = useState()
  const [date, setDate] = useState()
  const [gender_input, setGender] = useState()
  const [status, setStatus] = useState()
  const [pension, setPension] = useState(0)
  const [hasPension, setHasPension] = useState(false)
 
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState([]);
  const [monthlyPension, setMonthlyPension] = useState(0);
  const navigate = useNavigate();

  const handlePension = (ev) => {
    setHasPension(!hasPension)
    if(hasPension){
        setPension(ev)
    }
  }

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

  const onSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const data = {
        first_name: firstname.current.value,
        last_name: lastname.current.value,
        email: email_input.current.value,
        contact_number: contactNumber.current.value,
        gender: gender_input,
        religion: religion_input.current.value,
        citizenship: citizenship_input.current.value,
        age: age_input.current.value,
        birthdate: date,
        status: status,
        barangay: brgy,
        city: city,
        province: province,
        emergency_contact_person: emergency_contact_person.current.value,  
        emergency_contact_number: emergency_contact_number.current.value,
        birthplace: birthplace.current.value,  
        monthlyPension: monthlyPension,
        pension: pension
    }

    axiosClient.post('/insert-register', data)
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
              toastError('Please provide some information!')
              setErrors(response.data.errors)
            }
        })

    console.log(errors)
  }

  return (
    <FormContainer>
         <ToastContainer/>
        <div className='w-full'>

            <LogoForm/>

            <form action="" className='px-[50px]' onSubmit={onSubmit}>
                <h1 className='text-lg font-bold text-[#0755A2]'>Register</h1>
                <p className='text-sm font-sm text-gray-500'>Please enter your account details</p>

                <div className='mt-5 mb-6'>
                    <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Name</label>
                    <div className='grid gap-2 mb-6 md:grid-cols-2'>
                        <div>
                            <input ref={firstname} type="text" id="first_name" className={(errors.last_name ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Last Name"/>
                        </div>
                        <div>
                            <input ref={lastname} type="text" id="last_name" className={(errors.first_name ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="First Name"/>
                        </div>
                   
                    </div>
                </div>

                <div className='mb-6'>
                    
                    <div className='grid gap-2 mb-6 md:grid-cols-2'>
                        <div>
                        <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Emergency Contact Person</label>
                            <input ref={emergency_contact_person} type="text" id="first_name" className={(errors.emergency_contact_person ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Emergency Contact Person"/>
                        </div>
                        <div>
                        <label htmlFor="first_name" class="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Emergency Contact Number</label>
                            <input ref={emergency_contact_number} type="number" id="last_name" className={(errors.emergency_contact_number ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Emergency Contact Number"/>
                        </div>
                   
                    </div>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Email</label>
                    <input ref={email_input} type="text" id="first_name" className={(errors.email ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Email"/>
                </div>

                <div className='mb-6'>
                    <label for="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Address</label>
                    <div className='grid gap-2 mb-6 md:grid-cols-3'>
                        <div>
                            <select onChange={(ev) => setProvince(ev.target.value)}  id="" name="" className={(errors.province ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}>
                                <option value="" selected>Provice</option>
                                <option value="biliran">Biliran</option>
                            </select>
                        </div>
                        <div>
                            <select onChange={(ev) => setCity(ev.target.value)} id="" name="" className={(errors.city ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}>
                                <option value="" selected>City/Municipality</option>
                                <option value="maripipi">Maripipi</option>
                            </select>
                        </div>
                        <div className=''>
                            <select onChange={(ev) => setBrgy(ev.target.value)} id="" name="" className={(errors.barangay ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}>
                                <option value="" selected>Barangay</option>
                                <option value="binalayan west">Binalayan West</option>
                            </select>
                        </div>  
                    </div>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Age</label>
                    <input ref={age_input} type="number" id="first_name" className={(errors.age ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="No #"/>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Birthdate</label>
                    <input onChange={(ev) => setDate(ev.target.value)} type="date" id="first_name" className={(errors.birthdate ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="09**********"/>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Birthplace</label>
                    <input ref={birthplace} type="text" id="first_name" className={(errors.birthplace ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Birthplace"/>
                </div>


                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Contact Number</label>
                    <input ref={contactNumber} type="number" id="first_name" className={(errors.contact_number ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="09**********"/>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Gander</label>
                    <select onChange={(ev) => setGender(ev.target.value)} id="" name="" className={(errors.gender ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}>
                        <option value="" selected>Gender</option>
                        <option value="male" >Male</option>
                        <option value="female" >Female</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Citizenship</label>
                    <input ref={citizenship_input} type="text" id="first_name" className={(errors.citizenship ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Citizenship"/>
                </div>

                <div className="mb-6">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Religion</label>
                    <input ref={religion_input} type="text" id="first_name" className={(errors.religion ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"} placeholder="Religion"/>
                </div>

                <div className="mb-6 w-[100px]">
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium  text-[#0755A2] dark:text-white">Status</label>
                    <select onChange={(ev) => setStatus(ev.target.value)} id="" name="" className={(errors.status ? 'border-red-500' : 'border-gray-300') + " bg-gray-50 border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"}>
                        <option value="" selected>Status</option>
                        <option value="Active" selected>Active</option>
                        <option value="Deceased" selected>Deceased</option>
                    </select>
                </div>

                <div className='flex gap-2 items-center mb-6'>
                    <input onChange={(ev) => handlePension(ev.target.value)} type="checkbox" name='withpension' value="1" id='pension'/>
                    <label htmlFor="pension">With Pension</label>
                </div>

              
                {hasPension && <div id='monthlyPension'>
                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Pension</label>
                    <input type="number" onChange={(ev) => setMonthlyPension(ev.target.value)} id="first_name" class={(errors.monthlyPension && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder='Monthly Pension'/>
                </div>}

                <div className="mb-6 mt-6 w-full">
                   <button className={(loading ? 'cursor-not-allowed' : 'bg-[#00ac54]') + ' active:bg-gray-100 text-white w-full p-2 text-lg font-md rounded hover:bg-blue-500 hover:text-white border hover:border-5-blue-500'}>
                      
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


    </FormContainer>
  )
}
