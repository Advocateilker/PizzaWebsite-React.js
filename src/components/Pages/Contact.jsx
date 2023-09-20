import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contactIndex'>
                <h1>Contact Us</h1>
                <label htmlFor="name">Full Name</label>
                <input type="text" id='name' placeholder='Enter Full Name .....' />
                <label htmlFor="email">E-Mail</label>
                <input type="email" id='email' placeholder='Enter E-Mail .....' />
                <label htmlFor="message">Your Message</label>
                <textarea id='message' placeholder='Enter Your Message .....' />
                <button type='submit'>Send Message</button>


            </div>





        </div>
    )
}

export default Contact