import React from 'react'
import { Link } from "react-router-dom"
import "./Home.css"

const Home = () => {

  return (
    <div className='Home'>

      <div className='HeaderContainer'>
        <h1> Pizza 38 </h1>
        <p>Delicious Pizza <br/> with Awesome Spicy </p>
        <Link to="/menu"><button>Order Now</button></Link>
        
      </div>


    </div>
  )
}

export default Home