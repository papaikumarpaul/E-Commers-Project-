import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import star_dull_icon from "../Assets/star_dull_icon.png";
import startIcon from "../Assets/star_icon.png";
import "./ProductDisplay.css";
const ProductDisplay = (props) => {
  const { product } = props;
  console.log(product.id)

  const {addTocart} = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="product-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="product-right-star">
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={startIcon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(41)</p>
        </div>
        <div className="productdisplay-rigth-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productes-right-description"></div>
        <div className="productes-right-size">
          <h1>Select Size</h1>
          <div className="productes-rightes-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addTocart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productsdisplay-right-category">
          <span>Category:</span>Woman,T-shirt,Crop Top
        </p>
        <p className="productsdisplay-right-category">
          <span>Category:</span>Tages:
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
