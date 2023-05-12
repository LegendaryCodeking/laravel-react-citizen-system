import React, { useEffect, useState } from 'react'
import LogoForm from '../../components/LogoForm'
import FormContainer from '../../components/FormContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from '../../axiosClient';
import { Navigate, useAsyncError, useParams } from 'react-router-dom';
import Success from '../../components/Layout/Success';

export default function Upload() {
    
    let {id} = useParams();

    if(!id){
        return <Navigate to={'/registration'}/>
    }
    
    const [front, _setFront] = useState('');
    const [back, _setBack] = useState('');
    const [studyLoad, _setStudyLoad] = useState('');

    const [front_image, _setFrontImage] = useState('');
    const [back_image, _setBackImage] = useState('');
    const [studyLoad_image, _setStudyLoadImage] = useState('');

    const [backErrors, setBackErrors] = useState('');
    const [frontErrors, setfrontErrors] = useState('');
    const [studyErrors, setstudyErrors] = useState('');

    const [loading, setLoading] = useState(true);
    const [passengers, setPassengers] = useState([]);
    const [getId, setId] = useState();

    const [passengerDataSuccess, setPassengerDataSuccess] = useState([])
    const [success, setSuccess] = useState(false)

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

        if(passengers.type == 'regular' || passengers.type == 'pwd' || passengers.type == 'senior'){
            _setStudyLoadImage(ev.target.files[0])
        }

        if(imageType.indexOf(file.type) !== -1){
            setfrontErrors('')
            _setFront(file.name);
            _setFrontImage(ev.target.files[0])
        }else{
            setfrontErrors('This image type is not allowed!')
            toastError('This image type is not allowed!')
        }

    }

    const setback = (ev) => {
        _setBack('');
        const file = ev.target.files[0];
        const imageType = ['image/jpeg', 'image/jpg', 'image/png'];

        if(imageType.indexOf(file.type) !== -1){
            setBackErrors('')
            _setBack(file.name);
            _setBackImage(ev.target.files[0])
        }else{
            setBackErrors('This image type is not allowed!')
            toastError('This image type is not allowed!')
        }

    }

    const setStudyLoad = (ev) => {
        _setStudyLoad();
        const file = ev.target.files[0];
        const imageType = ['image/jpeg', 'image/jpg', 'image/png'];

        if(imageType.indexOf(file.type) !== -1){
            setstudyErrors('')
            _setStudyLoad(file.name);
            _setStudyLoadImage(ev.target.files[0])
        }else{
            setstudyErrors('This image type is not allowed!')
            toastError('This image type is not allowed!')
        }
        
    }

    const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
    };

    const upload = (e) => {
        e.preventDefault();


        if(front == '' && back == '' && studyLoad == ''){
            setfrontErrors('Please provide some ID')

            setstudyErrors('Please provide some ID')

            setBackErrors('Please provide some ID')

            toastError('Please provide some ID')
        }else{
            setLoading(true)

            const data = {
                passengers_id : id,
                front_id : front_image,
                back_id : back_image,
                study_load : studyLoad_image,
            }

            console.log(data)

            axiosClient.post('/store-media', data, config)
                .then(({response}) => {
                    toastError('Identification submitted successfully', 'light', 'success')
                    _setFront('');
                    _setFrontImage('')
                    _setBack('');
                    _setBackImage('')
                    _setStudyLoad('');
                    _setStudyLoadImage('')

                    axiosClient.get(`/get-media?passenger=${id}`)
                        .then(({data}) => {
                            setLoading(false)
                            setSuccess(true)
                            setPassengerDataSuccess(data.data)
                        })  
                        .catch((error) => {
                            console.log(error)
                        })
                })
                .catch((error) => {
                    setLoading(false)
                    toastError('There was an error please try again later!', 'colored', 'error')
                })


        }
    }

    if(id){
        useEffect(() => {
            axiosClient.get(`/passengers/${id}`)
                .then(({data}) => {
                    setLoading(false);
                    setPassengers(data.data);
                })
                .catch(() =>{
                    setLoading(false);
                })
        }, [])
    }

  return (
    <FormContainer>
        <ToastContainer/>
        <LogoForm/>
        <div className={(loading || success ? 'hidden' : 'block') + ' flex items-center justify-center flex-col w-full'}>
            <h1 className='text-lg font-bold text-[#0755A2] mb-6 uppercase'>{passengers.type} REGISTRATION</h1>

            <h1 className='text-sm font-bold text-[#0755A2] uppercase'>Upload Front {passengers.type} ID</h1>
            <div className="flex items-center justify-center w-[80%] mb-6">
                <label htmlFor="dropzone-file" className={(!frontErrors ? 'border-gray-300' : 'border-red-500') +" flex flex-col items-center justify-center w-full h-50 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" rokeLinejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                        {!front && <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>}
                        {front && <p className="text-xs text-gray-500 dark:text-gray-400">{front}</p>}
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" onChange={setFront} />
                </label>
            </div> 

            <h1 className='text-sm font-bold text-[#0755A2] uppercase'>Upload Back {passengers.type} ID</h1>
            <div className="flex items-center justify-center w-[80%] mb-6">
                <label htmlFor="dropzone-file1" className={(!backErrors ? 'border-gray-300' : 'border-red-500') +" flex flex-col items-center justify-center w-full h-50 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"}>
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" rokeLinejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                        {!back && <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>}
                        {back && <p className="text-xs text-gray-500 dark:text-gray-400">{back}</p>}
                    </div>
                    <input id="dropzone-file1" type="file" className="hidden" onChange={setback} />
                </label>
            </div> 

            <div className={(passengers.type == "student" ? 'block' : 'hidden') + " w-[80%] text-center"}>
                <h1 className='text-sm font-bold text-[#0755A2]'>Upload Clear Image of Study Load</h1>
                <div className="flex items-center justify-center mb-6">
                    <label htmlFor="dropzone-file2" className={(!studyErrors ? 'border-gray-300' : 'border-red-500') +" flex flex-col items-center justify-center w-full h-50 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"}>
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" rokeLinejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span></p>
                            {!studyLoad && <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>}
                            {studyLoad && <p className="text-xs text-gray-500 dark:text-gray-400">{studyLoad}</p>}
                        </div>
                        <input id="dropzone-file2" type="file" className="hidden" onChange={setStudyLoad} />
                    </label>
                </div> 
            </div>


            <div className="mb-6 w-[80%]">
                <button onClick={upload} className='bg-blue-500 text-white w-full p-2 text-lg font-md rounded hover:bg-yellow-500 hover:text-white border hover:border-5-blue-500'>Submit</button>
            </div>
        </div>

        {loading &&
        <div className='flex justify-center flex-col items-center h-[100vh]'>
            <h1 className='text-lg font-md text-blue-500'>Please Wait.....</h1>
            <div role="status h-[200px]">
                <svg aria-hidden="true" className="w-[200px] h-[50px] mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>}

        {success && <Success data={passengers}/>}
    </FormContainer>
  )
}
