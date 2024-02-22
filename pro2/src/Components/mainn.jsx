import React from "react";
import Heroimage from "../assets/image1.png";
import Heroimage2 from "../assets/image2.png";
import Heroimage3 from "../assets/image3.png";
import { data } from "autoprefixer";
function main() {
  const myList = Data.map((datum) => (
    <div className="pr-5 py-5">
      <div className="w-48  overflow-clip flex flex-col justify-between h-64 ">
        <img src={Heroimage2} alt="" className="rounded-lg " />
        <div className="">
          <p className="opacity-50">
            {datum.rate}-{datum.Location}
          </p>
          <p className="opacity-75">{datum.detaile}</p>
          <p className="font-medium">
            from ${datum.price}/<span className="opacity-50">person</span>
          </p>
        </div>
      </div>
    </div>
  ));
  return (
    <div className=" flex flex-col min-h-screen">
      <div className="h-64 border-red-800 my-3 overflow-clip justify-center items-center flex">
        <img src={Heroimage} alt="This is an Image for Hero" />
      </div>
      <div>
        <p className="text-4xl font-bold">Online Experiances</p>
        <p className=" py-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </p>
      </div>
      <div className="flex ">{myList}</div>
    </div>
  );
}

export default main;
