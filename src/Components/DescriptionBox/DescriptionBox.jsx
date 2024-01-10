import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
      <div className="descriptionbox-nav-box">Description</div>
      <div className="descriptionbox-nav-box fead">Reviews (41)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            An e-commerce ewebsite in an online platform that 
            buying and selling of products.
            {/* 2.16 hr */}
        </p>
        <p></p>
      </div>
    </div>
  );
};


export default DescriptionBox;
