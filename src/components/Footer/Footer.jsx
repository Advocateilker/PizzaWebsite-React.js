import React from 'react'
import "./Footer.css"
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <div className='footer'>

            <div className='socialMedia'>
                <p>&copy;2023 www.pizza.com </p>
                <div className='icons'>
                    <FaInstagram />
                    <FaFacebook />
                    <FaTwitter />
                </div>

            </div>


        </div>
    )
}

export default Footer