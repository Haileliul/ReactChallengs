import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "./header";
import Sidebar from "./Sidebar";

const layout = () => {
  return (
    <div className="flex  max-h-screen  max-w-screen  bg-white relative">
      <Sidebar className="fixed" />
      <div className="flex flex-col items-stretch w-full h-full ">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
