import React from 'react'
import { Outlet , Navigate} from 'react-router-dom'
import HostLayout from '../HostLayout/HostLayout'

export default function AuthRequired() {

    const authenticated = localStorage.getItem("loggedin") 

    if(!authenticated){

        return <Navigate to='/login'  replace = {true} state={{message: "You must log in first"}}/>
    }
    return <Outlet/>
}
