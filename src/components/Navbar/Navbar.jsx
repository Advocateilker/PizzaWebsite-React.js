import React from 'react'
import Logo from "../../assets/logo.png"
import {Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='Navbar'>
        <div className='Navbar-Left'>
            <img src={Logo} alt="" />
        </div>
        <div className='Navbar-Right'>
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar