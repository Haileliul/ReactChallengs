import React from "react";

function Host() {
  return (
    <div className="px-10">
      <div>
        <ul className="inline-flex gap-5">
          <li className="hover:underline hover:bg-amber-200 hover:font-semibold hover:py-1  hover:px-3   ">
            Dash Board
          </li>
          <li className="hover:underline hover:bg-amber-200 hover:font-semibold hover:py-1  hover:px-3  ">
            incom
          </li>
          <li className="hover:underline hover:bg-amber-200 hover:font-semibold hover:py-1  hover:px-3  ">
            reviews
          </li>
          <li className="hover:underline hover:bg-amber-200 hover:font-semibold hover:py-1  hover:px-3  ">
            vans
          </li>
        </ul>
      </div>

      {/* -===================This dynamic page start====================== */}
      <div>
        <p className="text-lg font-bold">
          Your reviews{" "}
          <span className="text-sm font-thin ml-5">30 days ago</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default Host;
