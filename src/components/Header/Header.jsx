import React from 'react'
import './Header.css'
import { NavLink , Link} from 'react-router-dom';
import iconImg from '../../assets/images/avatar-icon.png'

export default function Header() {
  function fakeLogOut() {
    localStorage.removeItem("loggedin")
}
  return (
    <>
      <header>
        <NavLink  className="site-logo" to="/">#VanLife</NavLink>
        <nav>
          <NavLink className={({isActive}) => isActive ? "active-link" : null } to="/host">Host</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : null } to="/about">About</NavLink>
          <NavLink className={({isActive}) => isActive ? "active-link" : null } to="/vans">Vans</NavLink>
          <Link to="login" className="login-link">
                    <img 
                        src={iconImg}
                        className="login-icon"
                    />
                </Link>
                <button onClick={fakeLogOut}>X</button>
        </nav>
      </header>


    </>
  )
}
