import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
        <li onClick={()=>setMenu('shop')}><Link style={{textDecoration:"none",color:"black"}} to="/" >Shop</Link>{menu==='shop'? <hr/> :null}</li>
        <li onClick={()=>setMenu('men')}><Link style={{textDecoration:"none",color:"black"}} to="/men">Men</Link>{menu==='men'? <hr/> :null}</li>
        <li onClick={()=>setMenu('womwn')}><Link style={{textDecoration:"none",color:"black"}} to="/women">Women</Link>{menu==='womwn'? <hr/> :null}</li>
        <li onClick={()=>setMenu('kids')}><Link style={{textDecoration:"none",color:"black"}} to="/kids">Kids</Link> {menu==='kids'? <hr/> :null}</li>
     </ul>
     <div className='nav-login-cart'>
        <Link to="/login"><button>Login</button></Link>
      <Link to="/cart">  <img src={cart_icon} alt=''/></Link>
        <div className='nav-cart-count'>0</div>
     </div>
    </div>
  )
}

export default Navbar
