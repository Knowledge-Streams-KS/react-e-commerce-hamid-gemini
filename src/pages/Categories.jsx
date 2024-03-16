import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";

const Categories = () => {
  const { categoryName } = useParams();
  const [categoryList, setCategoryList] = useState([]);

  const apiUrl = "https://fakestoreapi.com/products/categories";
  const catApiUrl = `https://fakestoreapi.com/products/category/${categoryName}`;
  const fetchCategories = async () => {
    if (categoryName) {
      try {
        const resp = await axios.get(catApiUrl);
        setCategoryList(resp.data);
        //console.log(resp.data);
      } catch (error) {}
    } else {
      try {
        const resp = await axios.get(apiUrl);
        setCategoryList(resp.data);
        //console.log(resp.data);
      } catch (error) {}
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <>
    {categoryName ? (categoryList.length !== 0 ? (
        categoryList.map((item, index) => (
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
      )
    ):( categoryList.length !== 0 ? (
        categoryList.map((item, index) => (
          <>
          <NavLink to={`/categories/${item}`} key={index}>
            <p>{item}</p>
          </NavLink>
            <hr />
          </>
        ))
      ) : (
        <>
          <h1>Page not Found</h1>
        </>
      )
    )}
   </>  
  );
};

export default Categories;