import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';



 export const ShopContext=createContext(null);

 const getDefaultCart=()=>{
  let cart={};
  for(let i=0;i<all_product.length+1;i++){
    cart[i]=0;
  }
  return cart;
}

const ShopContextprovider = (props) => {

const [cartItem,setCartItem]=useState(getDefaultCart());

// console.log(cartItem)
// const addTocart=(itemId)=>{
// setCart((prev)=>({...prev,[itemId]:prev[itemId]+1}))
// console.log(cart)
// }
const addToCart = (productId) => {
  setCartItem((prevCart) => {
    const updatedCart = { ...prevCart };
    updatedCart[productId] = (updatedCart[productId] || 0) + 1;
    return updatedCart;
  });
};
// let removeCart=(itemId)=>{
//  setCart((prev)=>({...prev,[itemId]:prev[itemId]-1}))
//   console.log(cartItem)
//   }
  const contextValue={all_product,cartItem,addToCart};
  return (
    <ShopContext.Provider  value={contextValue}>
      {props.children}
    </ShopContext.Provider>

  )
}

export default ShopContextprovider;
;

