import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosClient from '../../axiosClient'
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default function ChairModal({manifest_id}) {

    const [left_chair, setLeftChair] = useState([])
    const [right_chair, setRightChair] = useState()
    
    useEffect(() => {
        get_sets()
    }) 

    const get_sets = () =>{
        axiosClient.get('/get-sets')
         .then(({data}) => {
            // console.log(data.right_chair)
            setLeftChair(data.left_chair)
            setRightChair(data.right_chair)
         })
    }

    const alertMessage = (text, icon) =>{
        Swal.fire({
          icon: icon,
          text: text,
          showConfirmButton: true,
          confirmButtonColor: 'red'
        })
      }

    const assignChair = (e) => {
        Swal.fire({
            title: e,
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: 'Proceed',
            cancelButtonText: 'Change',
            cancelButtonColor: 'red',
            confirmButtonColor: 'blue'
        }).then((action) => {
            if(action.isConfirmed){

                Swal.fire({
                    didOpen: () => {
                      Swal.showLoading()
                    }
                })

                const data = {
                    set_number: e
                }
                axiosClient.put(`/assign-set?manifest_id=${manifest_id}`, data)
                    .then(({data}) => {
                        if(data == 200){
                            window.location.reload();
                        }else{
                            Swal.fire('Something went wrong, please try again', 'error')
                        }
                    })
            }
        })
    }


  return (
    <div className='flex gap-20 p-5 bg-blue-500 rounded'>                    
        <ul className='chair-left grid grid-cols-3 gap-2'>
            { left_chair ? <>
                {left_chair.map(chair => (
                    <li>
                        {chair.status == 1 && <input disabled value={chair.set} type="radio" id={chair.set} name="hosting" class="hidden peer cursor-none" required />}
                        {chair.status == 0 && <input onChange={(ev) => assignChair(ev.target.value)} value={chair.set} type="radio" id={chair.set} name="hosting" class="hidden peer" required />}
                        <label for={chair.set} class={(chair.status == 1 ?  'border-red-500 cursor-not-allowed' : 'border-gray-200') + " inline-flex items-center justify-center w-10 h-10 p-5 text-gray-500 bg-white border-4 rounded-lg cursor-pointer peer-checked:border-yellow-400 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}>                           
                                <center>{chair.set}</center>
                        </label>
                    </li>
                ))}
            </> : null } 
        </ul>

        <ul className='chair-left grid grid-cols-3 gap-2'>
                <li>
                    <input value="pwd-1" type="radio" id="pwd-1" name="hosting" class="hidden peer" required/>
                    <label for="pwd-1" class="inline-flex items-center justify-center w-10 h-10 p-5 text-gray-500 bg-white border-4 border-gray-200 rounded-lg cursor-pointer peer-checked:border-yellow-400 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                            <center>PWD-1</center>
                    </label>
                </li>
                <li>
                    <input value="pwd-2" type="radio" id="pwd-2" name="hosting" class="hidden peer" required/>
                    <label for="pwd-2" class="inline-flex items-center justify-center w-10 h-10 p-5 text-gray-500 bg-white border-4 border-gray-200 rounded-lg cursor-pointer peer-checked:border-yellow-400 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100">                           
                            <center>PWD-2</center>
                    </label>
                </li>
                { right_chair ? <>
                    {right_chair.map(chair => (
                        <li>
                            {chair.status == 1 && <input disabled value={chair.set} type="radio" id={chair.set} name="hosting" class="hidden peer cursor-none" required />}
                            {chair.status == 0 && <input onChange={(ev) => assignChair(ev.target.value)} value={chair.set} type="radio" id={chair.set} name="hosting" class="hidden peer" required />}
                            <label for={chair.set} class={(chair.status == 1 ?  'border-red-500 cursor-not-allowed' : 'border-gray-200') + " inline-flex items-center justify-center w-10 h-10 p-5 text-gray-500 bg-white border-4 rounded-lg cursor-pointer peer-checked:border-yellow-400 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"}>                           
                                    <center>{chair.set}</center>
                            </label>
                        </li>
                    ))}
                </> : null}  

        </ul>

    </div>
  )
}
