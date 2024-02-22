import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { faCoffee, faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Van from "../assets/van1.jpg";
import { useParams } from "react-router-dom";

function vanDetail() {
  const prams = useParams();
  let [van, setVan] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/vans/${prams.id}`);
        console.log("Response data:", response.data);
        console.log(`params of ${typeof prams.id}`);
        //   setVans(response.data.vans);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="min-h-screen w-screen px-10 ">
      <span className="flex items-center gap-3 text-lg ">
        <FontAwesomeIcon icon={faCircleArrowLeft} />
        <p>Back to all Vans</p>
      </span>

      <div className="w-full ">
        <img
          src={Van}
          alt="Van"
          className="w-full sm:h-32 md:h-48 lg:h-80 object-cover object-center"
        />
      </div>
      <div className="w-fit bg-amber-500 rounded-md px-3 my-2 ">
        <p className="font-bold">type</p>
      </div>

      <div className="flex flex-col ">
        <p className="text-xl font-semibold mb-3">Modest Explorer</p>
        <p>
          Replace faCoffee with the specific icon you want to use. You can find
          the list of all available icons on the Font Awesome website.
          Customizing: Font Awesome also allows for customizing icons. You can
          adjust the size, color, and other properties directly through props.
          For example: Replace faCoffee with the specific icon you want to use.
          You can find the list of all available icons on the Font Awesome
          website. Customizing: Font Awesome also allows for customizing icons.
          You can adjust the size, color, and other properties directly through
          props. For example:
        </p>
        <button className="  self-stretch  hover:bg-orange-500 rounded-lg hover:px-20 py-2 shadow-black shadow-2xl bg-orange-300 hover:text-black px-32 my-10">
          Find your van
        </button>
      </div>
    </div>
  );
}

export default vanDetail;
