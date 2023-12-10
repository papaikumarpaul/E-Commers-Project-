import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import "./CartItem.css";

// extra img;

export const CartIt = () => {
  const {getTotalcartItemAmount, all_product, cartItem, removeCart } =useContext(ShopContext);
  const Total=getTotalcartItemAmount();
  return (
    <div className="carItem">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e, index) => {
        if (cartItem[e.id] > 0) {
          return(
          <div  key={index}>
            <div className="cartitems-format cartitems-format-main">
              <img src={e.image} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity">{cartItem[e.id]}</button>
              <p>${e.new_price * cartItem[e.id]}</p>
              <img
                className="cartitems-remove"
                src={remove_icon}
                onClick={() => removeCart(e.id)}
                alt=""
              />
            </div>
            <hr />
          </div>
          )
        }
        return null;
      })}

{/*  error */}
      <div className="cartitem-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartItems-total-item">
              <p>Subtatal</p>
              <p>${Total}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>${Total}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="csartitem-promocode">
          <p>If you have a promo code ,Enter it here </p>
          <div className="cartitem-promobox">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
