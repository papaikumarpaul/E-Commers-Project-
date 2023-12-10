import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';



 export const ShopContext=createContext(null);

 

const ShopContextprovider = (props) => {
  const getDefaultCart=()=>{
    let cart={};
    for(let i=0;i<all_product.length+1;i++){
      cart[i]=0;
    }
    return cart;
  }
const [cartItem,setCartItem]=useState(getDefaultCart());

console.log(cartItem)

const addTocart=(itemId)=>{
setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
console.log(cartItem)
}



let removeCart=(itemId)=>{
 setCartItem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  console.log(cartItem)
  }
  const getTotalcartItemAmount=()=>{
    let total=0;
    for (const  item in cartItem){
      if(cartItem[item]>0){
        let itemInco=all_product.find((product)=>product.id===Number(item));
        total+=itemInco.new_price*cartItem[item];
      }
      return total;
    }
  }
  const contextValue={getTotalcartItemAmount,all_product,cartItem,addTocart,removeCart,};
  return (
    <ShopContext.Provider  value={contextValue}>
      {props.children}
    </ShopContext.Provider>

  )
}

export default ShopContextprovider;
;

