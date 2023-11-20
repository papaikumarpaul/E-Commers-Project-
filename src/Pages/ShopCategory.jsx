import React, { useContext, useEffect } from 'react';
import dropdown from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';




const ShopCategory = (props) => {
const {ALLproduct}=useContext(ShopContext);



useEffect(()=>{
  fetch(ALLproduct).then((res)=>{
    return res.json();
  }).then((data)=>{
    console.log(data);
  })
})

  return (
    
    <div className='Shop_catagory'>
      <img src={props.banner} alt='banner' />
      <div className="shopcategory-indexSort">
        <p>
            <span>Showing 1-12</span> out of 36 product
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown} alt=''/>
        </div>
      </div>
      <div className="shopcategory-product">
       {
      ALLproduct.map((item,index)=>{
         if(props.category===item.category){
          return <Item key={index} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
         }else{
          return null;
         }
        })
       }
       
      </div>
    </div>
  )
}

export default ShopCategory
