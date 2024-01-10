import React, { useContext } from 'react';
import dropdown from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';
import './Css/ShopCategory.css';



const ShopCategory = (props) => {
const {all_product}=useContext(ShopContext);




  return (
    
    <div className='Shop_catagory'>
      <img className='shopCategory-banner' src={props.banner} alt='banner' />
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
      all_product.map((item,index)=>{
         if(props.category===item.category){
          return <Item key={index} name={item.name} id={item.id} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
         }else{
          return null;
         }
        })
       }
       
      </div>
      <div className="shopcategory-loadmore">
        exploer
      </div>
    </div>
  )
}

export default ShopCategory
