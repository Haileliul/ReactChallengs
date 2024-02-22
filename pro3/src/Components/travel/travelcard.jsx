import React from "react";
import images from "../../assets";

function tourCard(props) {
  return (
    <div className="bg-gray-300 min-h-40 flex-row flex">
      <img src={props.images} alt="" />
      <div className="pl-5 py-2  flex-col flex justify-between">
        <div>
          <p className="opacity-50">This short opacity</p>
          <p className="text-lg font-bold">{props.name}</p>
        </div>
        <div>
          <p className="text-sm">{props.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default tourCard;
