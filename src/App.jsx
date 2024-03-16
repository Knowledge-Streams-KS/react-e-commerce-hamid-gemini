import React, { useState } from 'react';
import Products from './pages/Products.jsx';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail.jsx';
import Categories from './pages/Categories.jsx';
import Header from './pages/Header.jsx';
import Home from './pages/Home.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Cart from './pages/Cart.jsx';


function App() {

  return (
    <>
    <Header/>
   
    <Routes>
    <Route path="/" element={<Home/>} > </Route>
    <Route path="/categories/:categoryName?" element={<Categories/>} > </Route>
    <Route path="/product-details/:productId?" element={<ProductDetail/>} > </Route>
    <Route path="/products/:categoryName?" element={<Products/>} > </Route>
    <Route path="*" element={<Error/>} > </Route> 


    <Route path="new" element={
    <PrivateRoutes>
      <Cart/>
    </PrivateRoutes>} > 
    </Route>

    </Routes> 
    </>
  )
}

export default App
