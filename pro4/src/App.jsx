import { useState } from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Vans from "./Pages/VanPage";
import Vandetail from "./Pages/vandetail";
import Layout from "./Components/layoutComponent";

import HostLayout from "./Components/HostPage/HostPageLayout";
import Dash from "./Components/HostPage/mainComponent.";
import Price from "./Components/HostPage/pricingcomponent";
import Van from "./Components/HostPage/vansComponent";
import "./server";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Vandetail />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dash />} />
            <Route path="pricing" element={<Price />} />
            <Route path="van" element={<Van />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
