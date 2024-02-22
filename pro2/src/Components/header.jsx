import React from "react";
import Logo from "../assets/airbnb.png";

function header() {
  return (
    <div className="shadow-lg w-full h-16 flex items-center px-10">
      <img src={Logo} alt="This is the logo " className="w-24 " />
    </div>
  );
}

export default header;
