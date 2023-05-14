import React from "react";
import "./product-item-style.scss";


const ProductItem = ({ product }) => {
  const { name, img} = product;
  return (
    <div className="single-product-container">
      <div
        className="product-img"
        style={{
            backgroundImage: `url(${img})`,
          }}
      />
      {/* <img src={require('../../img/cake.jpg')} alt=""/> */}
      <div className="product-body-container">
        <h5>{name}</h5>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default ProductItem;
