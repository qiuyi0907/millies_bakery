import React from 'react'
import { products } from '../../data'
import ProductItem from '../product-item/ProductItem'
import "./product-list-style.scss";

const ProductList = () => {
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList