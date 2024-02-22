import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function Pricing() {
  return (
    <div>
      <div className=" w-screen h-screen flex flex-col bg-amber-100  ">
        <p className="font-bold ">Income</p>
        <p className="text-md">Last 20 Days</p>
        <p className="text-lg font-bold">$2,260</p>
        <div className="bg-white bg-opacity-65  self-center  h-1/2  ">
          <Bar
            data={{
              labels: ["A", "B", "C"],
              datasets: [
                {
                  label: "Revenue",
                  data: [200, 300, 400],
                },
              ],
            }}
          />
        </div>

        <div>
          <div className="flex justify-between">
            <p className="font-bold text-lg ">Your Transaction (3)</p>
            <p className="">Last 20</p>
          </div>
          <div className="p-5 w-full h-full">
            <div className="bg-white w-full h-20 flex justify-between items-center rownde  ">
              <p>$720</p>
              <p>1/12/2012</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
