import React from 'react'
import { MenuList } from '../../Constants/MenuList'
import "./Menu.css"

const Menu = () => {
  return (
    <div className='menu'>
        <h1 className='menuTitle'>OUR MENU</h1>
        <div className='menuList'>
          {MenuList.map((menuItem,key)=>{
              return(
                <div className='menuItem'>
                  <div><img src={menuItem.image} alt='' /></div>
                  <h3>{menuItem.name}</h3>
                  <p>{menuItem.price} € </p>
                </div>
              )
              
          })}
        </div>
    </div>
  )
}

export default Menu