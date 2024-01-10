import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import RealatedProduct from '../Components/RealatedProducts/RealatedProduct'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useParams();
  const product=all_product.find((e)=>e.id===Number(productId));
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RealatedProduct />
    </div>
  )
}

export default Product
