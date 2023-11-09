import React from 'react';
import New_Collections from '../Assets/new_collections';
import Item from '../Item/Item';
import './NewCollections.css';
const NewCollections = () => {
  return (
    <div className='newCollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr/>
    <div className="collections">
       {New_Collections.map((item,index)=>{
return <Item key={index} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />
       })}
    </div>
    </div>
  )
}

export default NewCollections
