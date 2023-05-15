import { createContext, useState, useContext } from 'react';

const StateContext = createContext({
    user: null,
    user_token: null,
    notification: null,
    passengers: null,
    setPassengers: () => {},
    setNotification: () => {},
    setUser: () => {},
    setUserToken: () => {},
})

export const ContextProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [passengers, setPassengers] = useState({})
    const [notification, setNotification] = useState('')
    const [user_token, _setUserToken] = useState(localStorage.getItem('USER_TOKEN'))

    const setUserToken = (user_token) => {
        _setUserToken(user_token)
        if(user_token){
            localStorage.setItem('USER_TOKEN', user_token)
        }else{
            localStorage.removeItem('USER_TOKEN')
        }

        // token ? localStorage.setItem('USER_TOKEN', token) : localStorage.removeItem('USER_TOKEN')
    }

    return (
        <StateContext.Provider value={{ 
            user,
            user_token,
            notification,
            passengers,
            setPassengers,
            setNotification,
            setUser,
            setUserToken,
         }}>

            {children}

        </StateContext.Provider>
    ) 

}

export const useStateContext = () => useContext(StateContext)