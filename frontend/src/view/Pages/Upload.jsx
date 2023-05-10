import React, { useState } from 'react'
import LogoForm from '../../components/LogoForm'
import FormContainer from '../../components/FormContainer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Upload() {
    
    const [front, _setFront] = useState('');
    const [back, _setBack] = useState('');
    const [studyLoad, _setStudyLoad] = useState('');
    const [backErrors, setBackErrors] = useState('');
    const [frontErrors, setfrontErrors] = useState('');
    const [studyErrors, setstudyErrors] = useState('');

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

    const setFront = (ev) => {
        _setFront('');
        const file = ev.target.files[0];
        const imageType = ['image/jpeg', 'image/jpg', 'image/png'];
        console.log(file.type)
        if(imageType.indexOf(file.type) !== -1){
            setfrontErrors('')
            _setFront(file.name);
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
        }else{
            setstudyErrors('This image type is not allowed!')
            toastError('This image type is not allowed!')
        }
        
    }

  return (
    <FormContainer>
        <ToastContainer/>
        <LogoForm/>

        <h1 className='text-lg font-bold text-[#0755A2] mb-6'>STUDENT REGISTRATION</h1>

        <h1 className='text-sm font-bold text-[#0755A2]'>Upload Front ID</h1>
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

        <h1 className='text-sm font-bold text-[#0755A2]'>Upload Back ID</h1>
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

        <h1 className='text-sm font-bold text-[#0755A2]'>Upload Clear Image of Study Load</h1>
        <div className="flex items-center justify-center w-[80%] mb-6">
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

        <div className="mb-6 w-[80%]">
            <button className='bg-blue-500 text-white w-full p-2 text-lg font-md rounded hover:bg-yellow-500 hover:text-white border hover:border-5-blue-500'>Submit</button>
        </div>
    </FormContainer>
  )
}
