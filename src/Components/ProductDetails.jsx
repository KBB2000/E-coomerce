import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { items } from "./Data";
import Product from "./Product";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([])

  useEffect(() => {
    const filteredProduct = items.filter((product) => product.id == id);
    setProduct(filteredProduct[0]);
    const relatedProduct = items.filter((keshav) => keshav.category == product.category)
    console.log(relatedProduct);
    setRelatedProduct(relatedProduct)
  }, [id, product.category]);

  return (
    <>
    <div className="contrainer-flex">
      <div className="img">
        <img src={product.imgSrc} alt="" />
      </div>
      <div>
        <h1 className="card-title">{product.title}</h1>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary mx-3">₹.{product.price}</button>
        <button className="btn btn-danger">Add To Cart</button>
      </div>
    </div>
        <h1 className="text-center">Related Products</h1>
      <Product items={relatedProduct}/>
      </>
  );
};

export default ProductDetails;
