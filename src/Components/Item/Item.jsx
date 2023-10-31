import React from 'react'

const Item = (props) => {
  return (
    < div className='item'>
      <img src={props.img} alt=''/>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">

        </div>
        <div className="item-price-old">

        </div>
      </div>
    </div>
  )
}

export default Item
