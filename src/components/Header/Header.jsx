import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
        </nav>
      </header>


    </>
  )
}
