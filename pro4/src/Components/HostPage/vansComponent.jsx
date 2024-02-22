import React from "react";
import vann from "../../assets/van1.jpg";
function van() {
  return (
    <div>
      <div className="w-screen h-screen bg-amber-100 ">
        <p className="text-lg font-bold py-3"> Your Listed Vans </p>
        <div className="p-5">
          <div className="flex bg-white ">
            <img src={vann} alt="" className=" w-20 h-full mr-2" />
            <div>
              <div>Modest Explorere</div>
              <div>$80/day</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default van;
