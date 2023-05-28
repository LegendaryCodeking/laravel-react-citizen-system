import { Children } from "react";
import {Navigate, createBrowserRouter} from 'react-router-dom'
import GuestLayout from "./components/Layout/GuestLayout";
import NotFound from "./view/NotFound";
import MainLayout from "./components/Layout/MainLayout";
import Dashboard from "./view/Dashboard";
import Login from "./view/Login";
import Manifest from "./view/Manifest";
import Sales from "./view/Sales";
import People from "./view/People";
import Ticketing from "./view/Ticketing";
import RegistrationLayout from "./components/Layout/RegistrationLayout";
import Register from "./view/Pages/Register";
import Upload from "./view/Pages/Upload";
import Profile from "./view/Pages/Profile";
import QrCode from "./view/Pages/QrCode";
import ValidationPage from "./view/Pages/ValidationPage";
import Seniors from "./view/Seniors";
import AddSenior from "./view/Pages/AddSenior";
import AddBarangay from "./view/Pages/AddBarangay";
import AddBarangayUser from "./view/Pages/AddBarangayUser";

const router =  createBrowserRouter ([
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/',
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
                path: '/barangay',
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
                path: '/seniors',
                element: <Seniors/>
            },
            {
                path: '/seniors/add-senior',
                element: <AddSenior/>
            },
            {
                path: '/barangay/add-barangay',
                element: <AddBarangay/>
            },
            {
                path: '/people/add-barangay-user',
                element: <AddBarangayUser/>
            },
            {
                path: '/ticketing',
                element: <Ticketing/>
            },
            {
                path: '/passenger/profile/:id',
                element: <Profile/>
            },
            {
                path: '/passenger/profile/:id/:tab',
                element: <Profile/>
            },
            {
                path: '/validation-page/:qr',
                element: <ValidationPage/>
            },
        ]
    },
    {
        path: '/',
        element: <RegistrationLayout/>,
        children: [
            {
                path: '/registration',
                element: <Register/>
            },
            {
                path: '/registration-step/:id',
                element: <Upload/>
            },
            {
                path: '/qr_code/:qr',
                element: <QrCode/>
            },
           
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
    
])

export default router