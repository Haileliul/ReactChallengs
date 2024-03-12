import { useState } from "react";
import Poster from "./pages/Postpager";

import Navbar from "./components/ecomerse/navbar";
import Layout from "./components/ecomerse/layout";
import Shop from "./pages/ecomerse/shop";
import Men from "./pages/ecomerse/men";
import Women from "./pages/ecomerse/women";
import Kids from "./pages/ecomerse/kids";
import Cart from "./pages/ecomerse/cart";
import Login from "./pages/ecomerse/Login";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
