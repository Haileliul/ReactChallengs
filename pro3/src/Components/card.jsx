import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import bulb from "../assets/bulb.jpg";
function myCard(props) {
  console.log(props);
  return (
    <div className="w-64 h-64 shadow-lg flex flex-col mr-5 mb-5">
      <div className="flex-2 overflow-clip px-2 pt-2">
        <img src={bulb} alt="" className="rounded-md" />
      </div>

      <div className="flex-2 p-2">
        <div className=" flex h-full flex-col justify-around ">
          <p className="text-lg font-bold font-sans">{props.name}</p>
          <span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} />
              <p>{props.phone}</p>
            </span>
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>hailetechlover@gmail.com</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default myCard;
