import React from "react";

function JockCard({ jock, punch }) {
  return (
    <div className="m-5 bg-white shadow-md flex-col rounded-bl-md rounded-tr-lg">
      <p className="text-lg font-medium pl-2 pt-2  ">{jock}</p>
      <p className="pl-5 pt-2 text-sm opacity-50">{punch}</p>
    </div>
  );
}

export default JockCard;
