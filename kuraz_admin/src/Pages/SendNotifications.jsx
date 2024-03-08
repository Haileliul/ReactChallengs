import React, { useState } from "react";
import Input from "../Components/subpage/TextformFieldWithLable";

const SendNotifications = () => {
  const [title, settitle] = useState("");
  return (
    <div className="w-full min-h-screen bg-background p-3">
      <div className="w-full h-full text-DarkText_Color ">
        <div className="w-full h-20 bg-white flex flex-row justify-between px-2 items-center rounded-2xl text-DarkText_Color">
          <p>Categories</p>
          <p>16.may,2023</p>
        </div>
        <div className="flex-1 bg-white my-4 rounded-lg p-5 gap-2 flex flex-col">
          <p className="text-lg font-bold text-DarkText_Color">
            Send Notification
          </p>
          <hr className="border-b-4" />

          <div className=" grid lg:grid-cols-5   mx-7">
            <div className="col-span-3 flex flex-col gap-5 ">
              <Input lable="Title" onChange={settitle} />
              <div>
                <p className="">Message</p>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  className="outline-none border-2 border-black"
                ></textarea>
              </div>
            </div>
            <div className=" col-span-2">
              <p>This is the place for the list to be exist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendNotifications;
