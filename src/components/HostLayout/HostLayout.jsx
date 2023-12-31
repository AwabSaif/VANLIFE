import React from 'react'
import { NavLink } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import'./HostLayout.css'
export default function HostLayout() {
  const isActiveStyle= {
    
      fontWeight: "bold",
      textDecoration: "underline",
      color: "#161616",
  
  }
  return (
    <>
      <nav className="host-nav">

   <NavLink style={({isActive}) => isActive ? isActiveStyle : null } end to="/host">Dashboard</NavLink>
   <NavLink style={({isActive}) => isActive ? isActiveStyle : null } to="income">Income</NavLink>
   <NavLink style={({isActive}) => isActive ? isActiveStyle : null } to="vans">Vans</NavLink>
   <NavLink style={({isActive}) => isActive ? isActiveStyle : null } to="reviews">Reviews</NavLink>
      </nav>
    <Outlet/>
    
    </>
  )
}
