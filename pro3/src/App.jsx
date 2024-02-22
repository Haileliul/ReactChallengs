import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./Components/card";
import Stack from "./Components/stack";
import TourCard from "./Components/travel/travelcard";
import TourData from "./Components/travel/data";
import bulb from "./assets/bulb.jpg";

import JockData from "./Components/jockData";
import JockCard from "./Components/JockCard";

function App() {
  /*  const jockmaker = JockData.map((jock) => {
    return <JockCard jock={jock.setup} punch={jock.punchline} />;
  });
  const [num, setnum] = useState(0);

  function handleAddClick() {
    setnum((oldnum) => {
      return oldnum + 1;
    });
    console.log(num);
  }
  function hndleSubClick() {
    if (num > 0) {
      setnum((oldnum) => {
        return oldnum - 1;
      });
    }

    console.log(num);
  } */
  const [isGogingOut, setIsgoing] = useState(true);

  function statechangehandler() {
    setIsgoing((oldvalue) => {
      return (oldvalue = !oldvalue);
    });
  }
  return (
    // =======This Div is for jock maker=========
    /*   <div className="flex min-h-screen p-10 flex-wrap flex-col items-center justify-center">
      <div className="bg-yellow-100 w-1/2">
        <p className="pt-10 px-5 text-lg font-bold font-serif">
          Wellcome to Jock Area bro
        </p>
        {jockmaker}
      </div>
    </div> */
    // ======================This is for TravelJornal =======================
    /*   <div className="w-screen  min-h-screen ">
      <header>
        <div className="w-screen h-16 shadow-lg bg-red-700 flex items-center justify-center text-white">
          <FontAwesomeIcon icon={faGlobe} />
          <p className="pl-2">My Travel Jornal</p>
        </div>
      </header>
      <main>
        <div>
          {TourData.map((item) => {
            return (
              <TourCard
                image={item.image}
                name={item.name}
                detail={item.detail}
              />
            );
          })}
        </div>
      </main>
    </div>
 */
    // =========================This one is for meem Generator ==================
    /*  <div>
      <header>
        <div className="flex-row flex justify-between p-6 shadow-lg bg-gradient-to-r from-purple-900 to-purple-400">
          <div className="flex items-center text-white">
            <FontAwesomeIcon icon={faSmile} />
            <p className="pl-2">Meme Generator</p>
          </div>
          <p className="text-white">React Course - Project 3 </p>
        </div>
      </header>
      <main>
        <div className="min-h-screen max-w-screen bg-gray-400 ">
          <form action="">
            <div className="flex justify-around">
              <input
                type="text"
                placeholder="Top"
                className="border-2 border-gray-200 focus:border-red-500 flex-1 mx-10 mt-10 rounded-md p-2"
              />
              <input
                type="text"
                placeholder="Top"
                className="border-2 border-gray-200 focus:border-red-500 flex-1 mx-10 mt-10 rounded-md p-2"
              />
            </div>
            <div className="flex justify-center max-w-screen ">
              <button
                onClick={() => console.log("Button clicked")}
                className="bg-gradient-to-r w-1/2  from-purple-900 to-purple-400 hover:bg-red-500 text-white font-bold py-3 px-4 mt-10  rounded-md"
              >
                Add your meme Image
              </button>
            </div>
          </form>
        </div>
      </main>
    </div> */
    // ===================================This one is for usestate hock===========================
    /*  <div className="flex justify-center items-center h-screen">
      <div className="w-56 h-48 shadow-lg flex justify-center items-center">
        <div className="bg-gray-500 w-24 h-24 rounded-full relative ">
          <p className="text-center mt-5 font-bold">{num}</p>
          <div
            className="bg-black w-10 h-10 rounded-full absolute bottom-0 right-0 text-white flex items-center justify-center hover:bg-white hover:text-black "
            onClick={handleAddClick}
          >
            <p className="text-center font-bold text-3xl">+</p>
          </div>
          <div
            className="bg-black w-10 h-10 rounded-full absolute bottom-0 left-0 text-white flex items-center justify-center  hover:bg-white hover:text-black "
            onClick={hndleSubClick}
          >
            <p className="text-center font-bold text-3xl">-</p>
          </div>
        </div>
      </div>
    </div> */
    // ==========================This one is for on clik true or False button=============
    <div className="w-screen h-screen flex justify-center items-center">
      <div
        className="w-20 h-20 rounded-full  flex justify-center items-center  shadow-lg "
        onClick={statechangehandler}
      >
        {isGogingOut ? <p>true</p> : <p>false</p>}
      </div>
    </div>
  );
}

export default App;
