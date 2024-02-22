import React from "react";
import van from "../../assets/van1.jpg";
function dashbord() {
  return (
    <div className=" bg-amber-50 min-w-full min-h-screen ">
      <div className=" min-w-full h-32 flex flex-col  ">
        <div className=" flex-2 bg-amber-200  flex  justify-between px-5 items-center py-2">
          <div className="flex flex-col h-full justify-between ">
            <p className="font-semibold"> Wllcome!</p>
            <p className="text-sm">This is sub title</p>
            <p className="font-bold text-xl">$2,260</p>
          </div>
          <div>
            <p>Wellcome</p>
          </div>
        </div>
        <div className="flex-1 bg-amber-300">
          <div className="flex h-full justify-between px-5 items-center ">
            <p>This one is Review</p>
            <p>Show</p>
          </div>
        </div>
      </div>

      {/* =========================================bootom======================== */}

      <div className="flex justify-between px-5 my-5">
        <p className="font-bold ">Your Listed Vans</p>
        <button>See All</button>
      </div>

      <div className="min-h-full w-full flex flex-col ">
        <div className="w-full h-36  shadow-lg flex justify-between items-center pr-5 pl-10">
          <div className="w-3/4 h-full flex  items-center">
            <div className="h-full w-full mr-2 flex-2">
              <img
                src={van}
                alt=""
                className=" object-cover object-center h-full w-full "
              />
            </div>

            <div className="flex-col flex flex-2  gap-5 justify-center h-full">
              <div className=" font-bold text-xl">This one is for Title</div>
              <div className="text-sm">This one is for SubTitle</div>
            </div>
          </div>
          <div>
            <p> $40</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashbord;
