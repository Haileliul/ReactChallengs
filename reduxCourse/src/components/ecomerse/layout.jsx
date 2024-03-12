import React from "react";
import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
const layout = () => {
  return (
    <div className="min-h-screen min-w-screen ">
      <div className="flex flex-col">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default layout;
