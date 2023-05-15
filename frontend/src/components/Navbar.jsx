import { Fragment, useEffect } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import * as FaIcon from "react-icons/fi";
import Profile from  "../assets/images/profile.png"
import { useStateContext } from '../Context/ContextProvider';
import axiosClient from '../axiosClient';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const {setUser, user} = useStateContext()

  useEffect(() => {
    axiosClient.get('/user')
      .then(({data}) => {
        setUser(data)
      })
  }, [])

  return (
    <div className='navbar'>
      <div className='px-10'>
        <img src="./public/images/logo-1.jpg" alt="" className='h-16 rounded-full' />
      </div>

      <div className='p-5 flex items-center gap-1'>

      <button type="button" className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-gray-700 rounded-full hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <FaIcon.FiBell/>
        <span className="sr-only">Notifications</span>
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">20</div>
      </button>
      
      <Menu as="div" className="relative ml-3">
          <div className='flex items-center justify-center gap-2'>
            <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-9 w-9 rounded-full outline outline-2  outline-offset-2"
                src={Profile}
                alt=""
              />
            </Menu.Button>
            <div className=''>
              <span className='text-md font-semibold text-gray-600'>{user.last_name} {user.first_name}</span><br />
              <span className='text-sm font-md text-gray-500 capitalize'>{user.role}</span>
            </div>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Your Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
