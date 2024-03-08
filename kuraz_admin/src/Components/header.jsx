import React from "react";
import Images from "../assets/index";

const header = () => {
  return (
    <div className=" bg-background w-full min-h-28 flex px-2 items-center">
      <div className=" bg-primary text-Text_Color w-full h-24 rounded-3xl px-5 flex  items-center  justify-between text-whiteText_color ">
        <div className="flex flex-col w-full h-full justify-center  ">
          <p className="font-bold text-3xl">Welcome, Kuraz</p>
          <p>What would you like to do ?</p>
        </div>
        <div className="flex  flex-row gap-2 items-center">
          <div className="w-14 h-14 rounded-full  bg-clip-border overflow-clip">
            <img
              src={Images.Kurazlogo}
              className=""
              alt="this is aplace holder image  for profile"
            />
          </div>
          <div className="w-24">
            <p>Haileliul Baye</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
