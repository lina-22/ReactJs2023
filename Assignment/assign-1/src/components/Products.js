import React from "react";
import Product from "./Product";
export default function Products({ products }) {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
