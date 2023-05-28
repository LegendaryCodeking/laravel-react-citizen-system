import React, { useEffect, useState } from "react";
import {FiShoppingCart, FiInbox,FiUserPlus, FiHome, FiArchive, FiAnchor, FiMessageSquare } from "react-icons/fi";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Logo from '../assets/images/logo-2.jpg'
import Admin from '../assets/images/image-3.jpg'
import { useStateContext } from "../Context/ContextProvider";
import axiosClient from "../axiosClient";

export default function SideBar({passengers}) {

    const [active, setActive] = useState(false)
    const [link, setLink] = useState('')
    const [notification_num, setNum] = useState(1)
    const menuItems = [
        {
            title: 'Barangay', 
            icon: <FiArchive/>,
            link: '/barangay'
        },
        {
            title: 'Senior Citizen', 
            icon: <FiAnchor/>,
            link: '/seniors'
        },
        {
            title: 'Users', 
            icon: <FiUserPlus/>,
            link: '/people',
        },
        {
            title: 'Reports', 
            icon: <FiInbox/>,
            link: '/reports'
        },
    ]

    const {setUser, setUserToken, user} = useStateContext()

    const sidebarHandler = () => {
        setActive(!active)
    }

    const handleResize = () => {
       // setActive(true)
    }

    const handleLink = () =>{
        setLink(window.location.pathname)
        console.log(link)
    }

    useEffect(() => {
        axiosClient.get('/user')
          .then(({data}) => {
            setUser(data)
          })
      }, [])

    window.addEventListener('resize', handleResize)

    return (
        <div className="flex flex-no-wrap relative">
            {/* Sidebar starts */}
            {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}
           <div className={(active ? "active" : "") +" absolute transition-all ease-in-out delay-150 md:w-[200px] sm:relative bg-gray-800 shadow md:h-full flex-col justify-between p-0"} id="sidebar">
            <div className="h-10 w-10 bg-[#337362] absolute right-0 mt-3 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer" id="mobile-toggler" onClick={sidebarHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={6} cy={10} r={2} />
                        <line x1={6} y1={4} x2={6} y2={8} />
                        <line x1={6} y1={12} x2={6} y2={20} />
                        <circle cx={12} cy={16} r={2} />
                        <line x1={12} y1={4} x2={12} y2={14} />
                        <line x1={12} y1={18} x2={12} y2={20} />
                        <circle cx={18} cy={7} r={2} />
                        <line x1={18} y1={4} x2={18} y2={5} />
                        <line x1={18} y1={9} x2={18} y2={20} />
                    </svg>
                </div>
                <div className="h-36 p-3 flex items-center bg-[#337362] w-full relative">
                        <div className="absolute h-[100px] w-[100px] left-[30%] top-[60%] flex flex-col items-center justify-center">
                            <img src={Admin} alt="" className="h-full w-full" />
                            <h1 className="font-bold text-mg">{user.last_name + ' ' + user.first_name}</h1>
                            <span className="uppercase text-gray-400">{user.role}</span>
                        </div>
                </div>
                <div className="px-8">
                    <ul className="mt-24 transition-all ease-in-out w-full">
                        <li onClick={handleLink} className={(window.location.pathname == '/dashboard' ? "bg-blue-200 text-blue-600" : "text-gray-500") + " flex-col py-2 px-2 rounded flex w-full justify-between font-medium hover:bg-blue-200 hover:text-blue-600 cursor-pointer  mb-1 transition-all ease-in-out"}>
                            <Link to={'dashboard'} className="text-md">
                            <div className="flex items-center">
                                <FiHome/>
                                <span className="text-md font-semibold tracking-wider ml-2">Dashboard &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

                                    <span className={(notification_num == 0 ? 'hidden' : 'block') + " inline-flex items-center rounded-md bg-red-500 px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10"}>
                                    {notification_num}
                                    </span>
                                </span>
                            </div>
                            </Link>
                        </li>
                        {
                            menuItems.map((items, key) => (
                                <li onClick={handleLink} key={key} className={(link == items.link ? "bg-blue-200 text-blue-600" : "text-gray-500") + " flex-col py-2 px-2 rounded flex w-full justify-between font-medium hover:bg-blue-200 hover:text-blue-600 cursor-pointer  mb-3 transition-all ease-in-out"}>
                                    <Link to={items.link} className="text-sm">
                                    <div className="flex items-center">
                                        {items.icon}
                                        <span className="text-md font-semibold tracking-wider ml-2">{items.title}</span>
                                    </div>
                                    </Link>
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
            <div className={(!active && "main") + " content w-full absolute transition-all ease-in-out delay-150"}>
                <Navbar user={user}/>
                <div className="md:w-full h-full rounded py-5 px-4">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}

    