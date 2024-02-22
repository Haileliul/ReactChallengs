import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Vans() {
  let [vans, setVans] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/vans");
        // console.log("Response data:", response.data);
        setVans(response.data.vans);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  console.log("Vans state:", vans);
  return (
    <div className="max-w-screen flex flex-col">
      <div className="mx-5">
        <p className="font-bold text-2xl py-5">Explore our van options</p>
        <div className="h-10 w-full overflow-x-auto">
          <div className="flex items-center justify-start bg-orange-400 w-fit mr-5 rounded-lg h-full">
            <p className="px-5 py-1">Haile</p>
          </div>
        </div>
        <div className="mt-5 w-full grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          {vans.map((van, index) => (
            <Link
              to={`/vans/:${index}`}
              className="hover:bg-slate-400 mx-2 hover:text-black px-3 py-2 hover:text-lg focus:text-amber-500"
            >
              <div className="w-full h-56 shadow-md " key={van.id}>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img
                    src={van.imageUrl}
                    alt="Van"
                    className="w-full h-40 object-cover object-center bg-clip-border"
                  />
                </motion.div>
                <div className="relative">
                  <div className="flex justify-between p-2">
                    <p className="font-bold">{van.name}</p>
                    <p className="font-semibold">${van.price} /day</p>
                  </div>
                  <div className="absolute top-10 bg-amber-500 rounded-md px-2 ">
                    <p className="font-bold">{van.type}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Vans;
