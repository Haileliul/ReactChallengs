import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./headerComponent";
import Footer from "./footerComponent";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
