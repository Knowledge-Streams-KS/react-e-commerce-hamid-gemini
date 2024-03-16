import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const Products = () => {
  const { categoryName } = useParams();
  const [productList, setProductList] = useState([]);

  const apiUrl = "https://fakestoreapi.com/products";
  const catApiUrl = `https://fakestoreapi.com/products/category/${categoryName}`;
  const fetchProducts = async () => {
    if (categoryName) {
      try {
        const resp = await axios.get(catApiUrl);
        setProductList(resp.data);
        //console.log(resp.data);
      } catch (error) {}
    } else {
      try {
        const resp = await axios.get(apiUrl);
        setProductList(resp.data);
        //console.log(resp.data);
      } catch (error) {}
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {productList.length !== 0 ? (
        productList.map((item, index) => (
          <>
          <NavLink to={`/product-details/${item.id}`}>
            <img src={item.image} alt="" width="60px" height="60px"></img>
            <p>Title:{item.title}</p>
            <p>Price:${item.price}</p>
          </NavLink>
            <hr />

          </>
        ))
      ) : (
        <>
          <h1>Page not Found</h1>
        </>
      )}
    </>
  );
};
export default Products;
