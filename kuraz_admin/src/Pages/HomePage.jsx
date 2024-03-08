import React from "react";
import { FaBuromobelexperte, FaUsers, FaQuestion } from "react-icons/fa";

const HomePage = () => {
  const MainBoxes = [
    {
      value: 20,
      Icon: <FaBuromobelexperte />,
      Title: "Total Categories",
      color: "#fff4de",
    },
    {
      value: 40,
      Icon: <FaQuestion />,
      Title: "Total Questions",
      color: "#f3e8ff",
    },
    {
      value: 40,
      Icon: <FaBuromobelexperte />,
      Title: "Total SubCategories",
      color: "#dcfce7",
    },

    {
      value: 40,
      Icon: <FaUsers />,
      Title: "Total No of Users",
      color: "#ffe2e5",
    },
  ];
  return (
    <div className=" bg-background w-full h-full px-4 py-2 grid  grid-cols-4">
      <div className="w-full  col-span-3 flex flex-col">
        <div className=" w-full  h-20 bg-white  flex flex-row  justify-between px-2 items-center rounded-2xl text-DarkText_Color">
          <p>Dashboard</p>
          <p>16.may,2023</p>
        </div>
        <div className="w-full h-full flex flex-col ">
          <span className=" grid grid-cols-4  w-full gap-4 py-3 flex-wrap  items-stretch">
            {MainBoxes.map((item) => {
              return (
                <div
                  className="h-36 w-56 rounded-xl  shadow-lg p-5 flex flex-col "
                  style={{ background: item.color }}
                >
                  <span className="h-32 flex justify-between ">
                    <p>{item.value}</p>
                    <span className="text-4xl">{item.Icon}</span>
                  </span>
                  <p className="flex-1">{item.Title}</p>
                </div>
              );
            })}
          </span>
          <span className="w-full h-full  grid  grid-cols-2 gap-4 mt-2">
            <div className="bg-white rounded-xl">
              <p>This is for graph</p>
            </div>
            <div className="bg-white rounded-xl">
              <p>and this one is for pichat</p>
            </div>
          </span>
        </div>
      </div>
      <div className="w-full h-screen overflow-y-scroll col-span-1 ml-4 bg-white shadow-lg">
        <p>Hi this is the right side part for Recent Winners page</p>
      </div>
    </div>
  );
};

export default HomePage;
