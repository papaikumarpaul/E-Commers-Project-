import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/Item';
import './popular.css';
 const Popular = () => {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr/>
      <div className="popular-item">
            {data_product.map((product, index) => {
                return <Item key={index} name={product.name} id={product.id} image={product.image} new_price={product.new_price} old_price={product.old_price} />
            })}
      </div>
    </div>
  )
}

export default Popular
