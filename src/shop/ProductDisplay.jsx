import React, { useState } from 'react'

const ProductDisplay = ({ item }) => {
    // console.log(item)
    const { name, id, price, seller, ratingsCount, quantity } = item;
    const [prequantity,setQuantity] = useState("quantity");
    const [coupon, setCoupon] = useState("");
    const [size, setSize] = useState("Select Size");
    const [color,setColor] = useState("Select Color");
  return (
      <div>
          <div>
              <h4>{name}</h4>
              <p className='rating'>
                  <i className='icofont-star'></i>
                  <i className='icofont-star'></i>
                  <i className='icofont-star'></i>
                  <i className='icofont-star'></i>
                  <i className='icofont-star'></i>
                  <span>{ratingsCount }review</span>
              </p>
              <h4>${price}</h4>
              <h6>{seller}</h6>
              <p></p>
          </div>
      </div>
  )
}

export default ProductDisplay