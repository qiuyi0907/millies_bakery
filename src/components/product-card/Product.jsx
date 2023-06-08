import React from 'react'
import './product-card.styles.scss'

const Product = ({product}) => {
  const {name, img, price} = product;
  return (
    <div className='product-card-container'>
      <div className="product-img">
        <img src={img} alt={name} />
        <div className="product-detail">
          <h6>{name}</h6>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}

export default Product