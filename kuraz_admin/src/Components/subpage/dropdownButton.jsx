import React, { useState } from "react";
import { FaAngleUp, FaAngleDown, FaImages } from "react-icons/fa";

const dropdownButton = (props) => {
  const [isexpanded, setIsexpanded] = useState(false);
  const [initialValue, setInitialValue] = useState("All");
  return (
    <div className=" relative ">
      <div
        className={`w-full ${isexpanded ? "h-[150px]" : "h-[50px]"}  relative`}
      >
        <div className="flex items-center gap-3">
          <p>{props.lable}</p>
          <button
            className="w-full bg-white text-Darker hover:bg-slate-100 shadow-md h-[50px] flex items-center justify-between px-5 rounded-lg"
            onClick={() => {
              setIsexpanded(!isexpanded);
            }}
          >
            <p>{initialValue}</p>
            {isexpanded ? <FaAngleDown /> : <FaAngleUp />}
          </button>
        </div>

        {isexpanded ? (
          <div className="flex flex-col    mt-2  items-center bg-background h-full">
            {props.data.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className="bg-slate-400 hover:bg-slate-600 hover:cursor-pointer text-white w-full flex justify-center mb-1 py-3 "
                  onClick={() => {
                    setInitialValue(item.name);
                    setIsexpanded(!isexpanded);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default dropdownButton;
