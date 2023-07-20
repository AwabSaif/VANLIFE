import React from 'react'
import { Outlet , Navigate , useLocation}  from 'react-router-dom'
import HostLayout from '../HostLayout/HostLayout'

export default function AuthRequired() {
    const authenticated = localStorage.getItem("loggedin") 
    const loaction = useLocation()
    console.log(loaction)

    if(!authenticated){

        return (<Navigate 
            to='/login'  
            state={{
                message: "You must log in first",
                from: loaction.pathname
            }}
            replace 
            />)
    }
    return <Outlet/>
}
