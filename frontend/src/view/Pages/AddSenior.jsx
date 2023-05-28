import React, { useRef, useState } from 'react'
import PaneBody from '../../components/PaneBody'
import image from '../../assets/images/profile.png'
import * as FaIcon from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from '../../axiosClient';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../Context/ContextProvider';
import Swal from 'sweetalert2/dist/sweetalert2.js'


export default function AddSenior() {

    const last_name = useRef(''); 
    const first_name = useRef(''); 
    const email = useRef(''); 
    const number = useRef(''); 
    const age = useRef(''); 
    const contact_person = useRef(''); 
    const monthlyPension = useRef('0'); 
    const birthplace = useRef(''); 
    const emergency_contact_person = useRef(''); 
    const emergency_contact_number = useRef(''); 
    const [selectedImage, setSelectedImage] = useState(null);

    const [barangay, setBarangay] = useState(''); 
    const [province, setProvince] = useState(''); 
    const [city, setCity] = useState(''); 
    const [gender, setGender] = useState(''); 
    const [birthdate, setBirthdate] = useState(''); 
    const [pension, setPension ]= useState(0); 
    const [status, setStatus ]= useState(''); 
    
    const [profile, _setProfile] = useState('');
    const [profileImage, _profileImage] = useState('');
    const [front, _setFront] = useState('');
    const [front_image, _setFrontImage] = useState('');
    const [back_image, _setBackImage] = useState('');
    const [back, _setBack] = useState('');

    const [backErrors, setBackErrors] = useState('');
    const [frontErrors, setfrontErrors] = useState('');
    const [profileError, setProfileError] = useState('');

    const [loading, setLoading] = useState(false)
    const [errors, setErrors] = useState([]);

    const navigate = useNavigate()
    const {setNotification} = useStateContext()


    const toastError = (text, color = 'colored', type = 'error') => {

        if(type == 'error'){
            toast.error(text, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: color,
            });
        }else{
            toast.success(text, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: color,
            });
        }
        
    }


    const setFront = (ev) => {
        _setFront('');
        const file = ev.target.files[0];
        const imageType = ['image/jpeg', 'image/jpg', 'image/png'];
        console.log(file.type)

        if(imageType.indexOf(file.type) !== -1){
            setfrontErrors('')
            _setFront(file.name);
            _setBackImage(ev.target.files[0])
        }else{
            setfrontErrors('This image type is not allowed!')
            toastError('This image type is not allowed!')
        }

    }

    const setBack = (ev) => {
        _setBack('');
        const file = ev.target.files[0];
        const imageType = ['image/jpeg', 'image/jpg', 'image/png'];
        console.log(file.type)

        if(imageType.indexOf(file.type) !== -1){
            setBackErrors('')
            _setBack(file.name);
            _setFrontImage(ev.target.files[0])
        }else{
            setBackErrors('This image type is not allowed!')
            toastError('This image type is not allowed!')
        }

    }

    const setProfile = (ev) => {
        _setProfile('');
        const file = ev.target.files[0];
        const imageType = ['image/jpeg', 'image/jpg', 'image/png'];
        const reader = new FileReader();
        console.log(file.type)


        console.log(selectedImage)

        if(imageType.indexOf(file.type) !== -1){
            setProfileError('')
            _setProfile(file.name);
            _profileImage(ev.target.files[0])

            reader.onload = () => {
                setSelectedImage(reader.result);
            };
    
            if (file) {
                reader.readAsDataURL(file);
            }
        }else{
            setProfileError('This image type is not allowed!')
            toastError('This image type is not allowed!')
        }

    }

    const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
    }

    const storeSenior = (e) => {
        e.preventDefault()
        var act_pension = 0
        var act_monthly = 0

        if(pension === 1){
            act_pension = 1
        }

        if(monthlyPension.current.value !== ''){
            act_monthly = monthlyPension.current.value
        }
        const data = {
             last_name: last_name.current.value ,
             first_name: first_name.current.value , 
             email: email.current.value,  
             number: number.current.value,  
             age: age.current.value,  
             monthlyPension: act_monthly,  
             birthplace: birthplace.current.value,  
             emergency_contact_person: emergency_contact_person.current.value,  
             emergency_contact_number: emergency_contact_number.current.value,
             profile_image: profileImage,
             front_id: front_image,
             back_id: back_image, 
             birthdate: birthdate,
             barangay:barangay,
             province:province,
             city: city,
             gender: gender,
             birthdate: birthdate,
             pension: act_pension,
             status:status
        }
        console.log(data)
        axiosClient.post('/store-senior', data, config)
        .then(({data}) => {
            setLoading(false)
            if(data.response === 200){
                Swal.fire({
                    text: 'Senior registered successfully!',
                    icon: 'success',
                    showConfirmButton: true,
                    showCancelButton: false,
                    confirmButtonText: 'OK',
                    confirmButtonColor: 'blue'
                }).then((action) => {
                    if(action.isConfirmed){
                        navigate('/seniors')
                    }
                })
                
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

    }

    const resetImage = () => {
        _profileImage('')
        setProfileError('')
        _setProfile('')
        setSelectedImage(null)
    }

    console.log(errors)
   

  return (
    <>
        <PaneBody title='Add Senior'>
        <ToastContainer/>
            <div className=' mt-10 border-2 border-gray-100 shadow-sm rounded p-5'>
                <form action="">
                    <div className='bg-gray-100 sm:p-2 h-[200px] w-full rounded flex flex-col justify-center items-center'>
                        <img src={selectedImage ? selectedImage : image} className='w-20 h-20 rounded-full' alt="" />
                        <p className='font-semibold text-md text-gray-500'>Image must be a type of jpg, png</p>

                        <div className='w-[500px] flex items-center justify-center gap-5 mt-4'>
                            <div className={(profileError || errors.profile_image ? 'border border-2 border-red-500' : '') + ' bg-white h-10 p-5 rounded shadow-sm flex items-center'}>
                                <label htmlFor="profile_upload" className='text-md font-semibold flex items-center justify-center gap-3'><FaIcon.FiUpload/>Upload Profile</label>
                                <input onChange={setProfile} type="file" name="profile_upload" className='hidden' id="profile_upload" />
                            </div>
                            <div className='bg-white h-10 p-5 rounded shadow-sm flex items-center'>
                                <button onClick={resetImage} type='button' className='text-md text-red-500 font-semibold flex items-center justify-center gap-3'><FaIcon.FiTrash/>Delete Profile</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <div>
                                <label for="first_name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                                <input ref={first_name} type="text" id="first_name" class={(errors.first_name && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="First name" />
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                                <input ref={last_name} type="text" id="first_name" class={(errors.last_name && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="Last name" />
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Email</label>
                                <input ref={email} type="text" id="first_name" class={(errors.email && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="Contact Email" />
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                                <input ref={number} type="number" id="first_name" class={(errors.number && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="Contact Number" />
                            </div>

                        </div>

                        <div className='grid gap-6 mb-6 md:grid-cols-3'>
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
                                <select onChange={(ev) => setProvince(ev.target.value)} type="number" id="first_name" class={(errors.province && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}>
                                    <option value="" selected hidden>Province</option>
                                    <option value="Biliran"  >Biliran</option>
                                </select>
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Municipality</label>
                                <select onChange={(ev) => setCity(ev.target.value)} type="number" id="first_name" class={(errors.city && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}>
                                    <option value="" selected hidden>Municipality</option>
                                    <option value="Maripipi"  >Maripipi</option>
                                </select>
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barangay</label>
                                <select onChange={(ev) => setBarangay(ev.target.value)} type="number" id="first_name" class={(errors.barangay && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}>
                                    <option value="" selected hidden>Barangay</option>
                                    <option value="Binalayan West">Binalayan West</option>
                                </select>
                            </div>
                        </div>

                        <div className='grid gap-6 mb-6 md:grid-cols-3'>
                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                <select onChange={(ev) => setGender(ev.target.value)} type="number" id="first_name" class={(errors.gender && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}>
                                    <option value="Female" selected>Female</option>
                                    <option value="Male" selected>Male</option>
                                </select>
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthdate</label>
                                <input onChange={(ev) => setBirthdate(ev.target.value)} type="date" id="first_name" class={(errors.birthdate && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder='Birthdate'/>
                                    
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                                <input ref={age} type="number" id="first_name" class={(errors.age && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder='Age'/>
                            </div>
                        </div>

                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthplace</label>
                            <input ref={birthplace} type="text" id="first_name" class={(errors.birthplace && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder='Birthplace'/>
                        </div>

                        <div className='mt-5'>
                            <div className='grid gap-6 mb-6 md:grid-cols-2'>
                                <div className='flex gap-2 items-center'>
                                    <input onChange={(ev) => setPension(ev.target.value)} type="checkbox" name='withpension' value="1" id='pension'/>
                                    <label htmlFor="pension">With Pension</label>
                                </div>
                                {pension ? <>
                                <div id='monthlyPension'>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Monthly Pension</label>
                                    <input ref={monthlyPension} type="number" id="first_name" class={(errors.monthlyPension && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder='Monthly Pension'/>
                                </div> </> : null}
                            </div>
                        </div>

                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                            <select onChange={(ev) => setStatus(ev.target.value)} type="number" id="first_name" class={(errors.status && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "}>
                                <option value="" selected hidden >Status</option>
                                <option value="Active" >Active</option>
                                <option value="Deceased">Deceased</option>
                            </select>
                        </div>

                        <div className='mt-5'>
                            <div className='grid gap-6 mb-6 md:grid-cols-2'>
                                <div id='monthlyPension'>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emergency Contact Person</label>
                                    <input ref={emergency_contact_person} type="text" id="first_name" class={(errors.emergency_contact_person && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder='Emergency Contact Person'/>
                                </div>

                                <div id=''>
                                    <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Emergency Contact Number</label>
                                    <input ref={emergency_contact_number} type="number" id="first_name" class={(errors.emergency_contact_number && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder='Emergency Contact Number'/>
                                </div>
                            </div>
                        </div>

                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <div className={(frontErrors || errors.back_id ? 'border-red-500' : 'border-gray-500') + ' border-dashed rounded border-2  p-5 h-[200]'}>
                                <label htmlFor="front_id" className='gap-2 text-md font-semibold text-gray-500 flex items-center justify-center'>
                                    <FaIcon.FiUpload/> Upload Front Senior Citizen ID
                                </label>
                                <center>{front && <p className='text-md font-semibold'>{front}</p>}</center>
                                <input type="file" name='front_id' id='front_id' className='hidden' onChange={setFront} />
                            </div>

                            <div className={(backErrors || errors.back_id ? 'border-red-500' : 'border-gray-500') + ' border-dashed rounded border-2  p-5 h-[200]'}>
                                <label htmlFor="back_id" className='gap-2 text-md font-semibold text-gray-500 flex items-center justify-center'>
                                    <FaIcon.FiUpload/> Upload Front Senior Citizen ID
                                </label>
                                <center>{back && <p className='text-md font-semibold'>{back}</p>}</center>
                                <input type="file" name='back_id' id='back_id' className='hidden' onChange={setBack}/>
                            </div>
                        </div>

                        <div className='mt-5 flex items-center justify-between'>
                            <div></div>

                            <div className='flex items-center justify-center gap-5'>
                            
                                <button onClick={storeSenior} className={(loading ? 'cursor-not-allowed' : 'bg-blue-500') + ' active:bg-gray-100 text-white w-[200px]] p-2 text-lg font-md rounded hover:bg-yellow-500 hover:text-white border hover:border-5-blue-500'}>
                      
                                        <div className='flex items-center justify-center gap-2'>

                                            {loading && <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                            </svg>}

                                            {loading ? 'loading.....' : 'Submit'}

                                        </div>

                                </button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </PaneBody>
    </>
  )
}
