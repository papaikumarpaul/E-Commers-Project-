import React from 'react';
import data_products from '../Assets/data';
import Item from '../Item/Item';
import './RelatedProducts.css';
const RealatedProduct = () => {
  return (
    <div className='relatedproducts'>
    <h1>Related Products</h1>
    <hr/>
    <div className="relatedproducts-item">
{
    data_products.map((item,index)=>{
        return  <Item key={index} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
    })
}
    </div>
      
    </div>
  )
}

export default RealatedProduct
