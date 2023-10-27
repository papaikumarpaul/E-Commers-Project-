import React, { useState } from 'react';
import cart_icon from '../Assets/cart_icon.png';
import logo from '../Assets/logo.png';
import './Navbar.css';
const Navbar = () => {
  const[menu,setMenu]=useState("shop");
  return (
    <div className='navbar'>
     <div className='nav-logo'>
 <img src={logo} alt=""/>
 <p>SHOPPER</p>
     </div>
     <ul className='nav-menu'>
        <li onClick={()=>setMenu('shop')}>Shop{menu=='shop'? <hr/> :null}</li>
        <li onClick={()=>setMenu('men')}>Men{menu=='men'? <hr/> :null}</li>
        <li onClick={()=>setMenu('womwn')}>Women{menu=='womwn'? <hr/> :null}</li>
        <li onClick={()=>setMenu('kids')}>Kids {menu=='kids'? <hr/> :null}</li>
     </ul>
     <div className='nav-login-cart'>
        <button>Login</button>
        <img src={cart_icon} alt=''/>
        <div className='nav-cart-count'>0</div>
     </div>
    </div>
  )
}

export default Navbar
