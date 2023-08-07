/* eslint-disable react/prop-types */
import React from "react";

export default function Product(props) {
  const { product } = props;
  const { title, description } = product;
  return (
    <article className="product">
      <img src="{product.image}" alt="ProImg" />
      <div>
        <h4>Title:{title}</h4>
        <p className="product_price">Price: {product.price}</p>
        {/* <p className="product_rating">{product.rating.rate}</p> */}
        <p className="product_desc">Description: {description}</p>
        <button className="product_btn btn">Add to cart</button>
      </div>
    </article>
  );
}

// const Product = () => {
//   return (
//       <article className="product">
//       <img src="" alt="" />
//       <div className="product__details">
//         <h4 className="product__title">product title</h4>
//         <p>Price: $ product price</p>
//         <p>Rating: product rating rate/5</p>
//         <p className="product__desc">Description: product.description</p>
//         <button className="product__btn btn">Add to cart</button>
//       </div>
//     </article>
//   );
// };
