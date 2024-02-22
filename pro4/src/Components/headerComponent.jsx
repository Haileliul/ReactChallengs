import React from "react";
import { Link } from "react-router-dom";
import reactLogo from "../assets/react.svg";

function Header() {
  return (
    <header className="bg-slate-700 h-16 w-screen text-white">
      <nav className="flex items-center h-full justify-between px-10">
        <div>
          <Link to="/">
            <img src={reactLogo} alt="" />
          </Link>
        </div>
        <div className="inline-block   ">
          <Link
            to="/host"
            className="hover:bg-slate-400 mx-2 hover:text-black px-3 py-2 hover:text-lg focus:text-amber-500"
          >
            Host
          </Link>
          <Link
            to="/"
            className="mx-2 hover:text-black px-3 py-2 hover:bg-slate-300  hover:text-lg  focus:text-amber-500"
          >
            Home
          </Link>
          <Link
            to="/About"
            className="hover:bg-slate-400 mx-2 hover:text-black px-3 py-2 hover:text-lg focus:text-amber-500"
          >
            About
          </Link>
          <Link
            to="/Vans"
            className="hover:bg-slate-400 mx-2 hover:text-black px-3 py-2 hover:text-lg focus:text-amber-500"
          >
            Vans
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
