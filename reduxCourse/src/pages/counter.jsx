import React from "react";
import { decremented, incremented, incrementByAmount } from "../state/count";
import { useSelector, useDispatch } from "react-redux";
const counter = () => {
  const count = useSelector((state) => state.counter.value);
  const Dispatch = useDispatch();
  return (
    <div className="w-screen h-screen bg-blue-950 flex justify-center items-center">
      <div className="w-[500px] h-[500px] bg-white flex justify-center items-center flex-col gap-5">
        <p className="text-4xl">{count}</p>
        <div className=" w-[250px] flex justify-between">
          <button
            className="px-5 py-2 bg-green-500 rounded-md"
            onClick={() => Dispatch(incremented())}
          >
            Increament
          </button>
          <button
            className="px-5 py-2 bg-red-500 rounded-md "
            onClick={() => Dispatch(decremented())}
          >
            Dicrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default counter;
