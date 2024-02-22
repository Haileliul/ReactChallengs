import React from "react";
import Image from "../assets/index";
import { ReactTyped, Typed } from "react-typed";
function Home() {
  return (
    <div>
      <div
        className="h-screen w-screen bg-cover  bg-center relative "
        style={{
          backgroundImage: `url(${Image.t2})`,
        }}
      >
        <div className="absolute bg-black opacity-50  inset-0 "></div>
        <div className="absolute inset-0 flex flex-col justify-evenly items-start  text-white">
          <ReactTyped
            strings={[
              "WellCome To Ethiopia ",
              "A land of dramatic landscapes",
              "Holly Land !!!",
            ]}
            typeSpeed={60}
            loop
            className="font-Protest  text-2xl self-center"
          />
          <div className="w-4/5  bg-black pl-5 py-5 mt-5 bg-opacity-50">
            <p>
              Ethiopia, a land of ancient origins and vibrant cultures,
              captivates with its rich history and diverse landscapes. From the
              majestic peaks of the Simien Mountains to the ancient rock-hewn
              churches of Lalibela, Ethiopia's beauty and heritage leave an
              indelible mark on all who visit. With its warm hospitality and
              resilient spirit, Ethiopia beckons adventurers and history
              enthusiasts alike to explore its treasures and embrace its unique
              charm.
            </p>
          </div>
          <div className="flex flex-col  items-stretch bg-black">
            <button className="  self-center  border-2 bg-orange-500 rounded-lg px-20 py-2 shadow-black shadow-2xl hover:bg-orange-300 hover:text-black hover:px-32">
              Find your van
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
