import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ProductDetail = () => {
      const { productId } = useParams();
      const [productData, setProductData] = useState([]);


  const fetchSingleProduct = async () => {
    try {
       //const params = useParams();
       const apiUrl = `https://fakestoreapi.com/products/${productId}`;

      const res = await axios.get(apiUrl);
      setProductData(res.data);

      //console.log(productId);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    fetchSingleProduct()
  },[])

  return (
    <>
    {productData ? (
    <>
    <img src={productData.image} alt="" width="300px" height="300px"></img>

    <h3>Product Name:</h3>
    <p>{productData.title}</p>
    <h3>Product Description:</h3>
    <p>{productData.description}</p>
    <h3>Price:</h3>
    <p>${productData.price}</p>

    </>
):( <h3>No Data Found</h3>)}
    </>
  );
};

export default ProductDetail;
