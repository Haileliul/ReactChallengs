import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function HostLayout() {
  return (
    <div className="w-full h-full bg-amber-100">
      <header>
        <ul className="inline-flex gap-5">
          <NavLink
            to="/host"
            style={({ isActive }) => ({
              color: isActive ? "red " : "black",
            })}
          >
            <li className="hover:underline hover:font-semibold hover:py-1  hover:px-3   ">
              Dash Board
            </li>
          </NavLink>
          <NavLink
            to="/host/pricing"
            style={({ isActive }) => ({
              color: isActive ? "red " : "black",
            })}
          >
            <li className="hover:underline hover:font-semibold hover:py-1  hover:px-3   ">
              Price
            </li>
          </NavLink>
          <NavLink
            to="/host/van"
            className="hover:bg-slate-400 mx-2 hover:text-black px-3 py-2 hover:text-lg focus:text-amber-500"
          >
            <li className="hover:underline hover:font-semibold hover:py-1  hover:px-3  ">
              vans
            </li>
          </NavLink>
        </ul>
      </header>
      <Outlet />
    </div>
  );
}

export default HostLayout;
