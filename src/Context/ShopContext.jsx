import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const ShopContextprovider = (props) => {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItem, setCartItem] = useState(getDefaultCart());

  const addTocart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  let removeCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  // cart  totals
  const getTotalcartItemAmount = () => {
    let total = 0;
    for (let item in cartItem) {
      if (cartItem[item] > 0) {
        let itemInco = all_product.find((produ) => produ.id === Number(item));
        
        total += itemInco.new_price * cartItem[item];

        console.log(itemInco);
      }
      console.log(total);

      
    }
    return total;
  };
  

  // total item

  const getTotalCartItem=()=>{
let totalItem=0;
for(let item in cartItem){
  if(cartItem[item]>0){
    totalItem+=cartItem[item];
  }}
return totalItem;
  }
  const contextValue = {
    getTotalCartItem,
    getTotalcartItemAmount,
    all_product,
    cartItem,
    addTocart,
    removeCart,
  };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextprovider;
