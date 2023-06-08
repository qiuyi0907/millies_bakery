import React from "react";
import { useContext } from "react";
import { ProductsContext } from "../../contexts/product-contexts";
import Product from "../product-card/Product";

const ProductCards = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductCards;
