import { Children } from "react";
import {Navigate, createBrowserRouter} from 'react-router-dom'
import GuestLayout from "./components/GuestLayout";
import NotFound from "./view/NotFound";
import MainLayout from "./components/MainLayout";
import Dashboard from "./view/Dashboard";
import Login from "./view/Login";
import Manifest from "./view/Manifest";
import Sales from "./view/Sales";
import People from "./view/People";
import Passengers from "./view/Passengers";
import Ticketing from "./view/Ticketing";

const router =  createBrowserRouter ([
    {
        path: '/auth',
        element: <GuestLayout/>,
        Children: [
            {
                path: '/auth',
                element: <Navigate to={'/auth'} />
            },
            {
                path: '/auth',
                element: <Login/>
            }
        ]
    },
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to={'/dashboard'}/>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/manifest',
                element: <Manifest/>
            },
            {
                path: '/sales',
                element: <Sales/>
            },
            {
                path: '/people',
                element: <People/>
            },
            {
                path: '/passengers',
                element: <Passengers/>
            },
            {
                path: '/ticketing',
                element: <Ticketing/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router