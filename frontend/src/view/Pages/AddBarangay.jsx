import React, { useRef, useState } from 'react'
import PaneBody from '../../components/PaneBody'
import profile from '../../assets/images/profile.png'
import * as FaIcon from "react-icons/fi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../../assets/images/logo-social.png'
import axiosClient from '../../axiosClient';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useNavigate } from 'react-router-dom';


export default function AddBarangay() {

    const barangay_name = useRef()
    const contact_number = useRef()
    const contact_person = useRef()
    const person_contact_number = useRef()
    const email = useRef()

    const [loading, setLoading] = useState(false)
    const [barangay, setBarangay] = useState(''); 
    const [province, setProvince] = useState(''); 
    const [city, setCity] = useState('');

    const [logo, _setLogo] = useState('');                        
    const [logoImage, _setLogoImage] = useState('');                        
    const [logoError, setLogoError] = useState('');    
    
    const [selectedImage, setSelectedImage] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate()
     

    const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
    }

    const setLogo = (ev) => {
        _setLogo('');
        const file = ev.target.files[0];
        const imageType = ['image/jpeg', 'image/jpg', 'image/png'];
        const reader = new FileReader();

        if(imageType.indexOf(file.type) !== -1){
            setLogoError('')
            _setLogo(file.name);
            _setLogoImage(ev.target.files[0])

            reader.onload = () => {
                setSelectedImage(reader.result);
            };
    
            if (file) {
                reader.readAsDataURL(file);
            }
        }else{
            setLogoError('This image type is not allowed!')
            toastError('This image type is not allowed!')
        }

    }

    const resetImage = () => {
        _setLogoImage('')
        setLogoError('')
        setSelectedImage(null)
    }

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

    const storeBarangay = (e) => {
        e.preventDefault();

        const data = {
            barangay_name: barangay_name.current.value ,
            contact_number: contact_number.current.value , 
            contact_person: contact_person.current.value,  
            person_contact_number: person_contact_number.current.value,  
            email: email.current.value,  
            logoImage: logoImage,
            barangay:barangay,
            province:province,
            city: city,
       }

       axiosClient.post('/store-barangay', data, config)
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
                        navigate('/barangay')
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

    

  return (
    <>
        <PaneBody title='Register Brangay'>
            <div className=' mt-10 border-2 border-gray-100 shadow-sm rounded p-5'>
                <form action="">

                    <div className='bg-gray-100 sm:p-2 h-[200px] w-full rounded flex flex-col justify-center items-center'>
                        <img src={selectedImage ? selectedImage : image} className='w-20 h-20 rounded-full' alt="" />
                        <p className='font-semibold text-md text-gray-500'>Image must be a type of jpg, png</p>

                        <div className='w-[500px] flex items-center justify-center gap-5 mt-4'>
                            <div className={(logoError || errors.profile_image ? 'border border-2 border-red-500' : '') + ' bg-white h-10 p-5 rounded shadow-sm flex items-center'}>
                                <label htmlFor="profile_upload" className='text-md font-semibold flex items-center justify-center gap-3'><FaIcon.FiUpload/>Upload Logo</label>
                                <input onChange={setLogo} type="file" name="profile_upload" className='hidden' id="profile_upload" />
                            </div>
                            <div className='bg-white h-10 p-5 rounded shadow-sm flex items-center'>
                                <button onClick={resetImage} type='button' className='text-md text-red-500 font-semibold flex items-center justify-center gap-3'><FaIcon.FiTrash/>Delete Logo</button>
                            </div>
                        </div>
                    </div>

                    <div className='mt-5'>
                        <div className='grid gap-6 mb-6 md:grid-cols-2'>
                            <div>
                                <label for="barangay" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barangay Name</label>
                                <input ref={barangay_name} type="text" id="first_name" class={(errors.first_name && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="Barangay name" />
                            </div>

                            <div>
                                <label for="contact" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                                <input ref={contact_number} type="number" id="first_name" class={(errors.contact_number && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="Contact Number" />
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Barangay Contact Person</label>
                                <input ref={contact_person} type="text" id="first_name" class={(errors.contact_person && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="Barangay Contact Person" />
                            </div>

                            <div>
                                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Person Contact Number</label>
                                <input ref={person_contact_number} type="number" id="first_name" class={(errors.person_contact_number && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="Barangay Contact Person" />
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

                        <div>
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input ref={email} type="text" id="first_name" class={(errors.email && 'border-2 border-red-500') + " bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "} placeholder="Contact Email" />
                        </div>

                        <div className='mt-5 flex items-center justify-between'>
                            <div></div>

                            <div className='flex items-center justify-center gap-5'>
                                <button onClick={storeBarangay} className='w-[100px] bg-blue-700 p-2 rounded text-white text-m font-semibold'>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            
        </PaneBody>
    </>
  )
}
