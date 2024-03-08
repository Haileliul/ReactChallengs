import React, { useState } from "react";
import InputField from "../Components/subpage/TextformFieldWithLable";
import { FaImages } from "react-icons/fa";
const ManageUsersPage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password, setpassword] = useState("");
  return (
    <div className="max-w-screen min-h-screen bg-background ">
      <div className="m-4 flex flex-col  max-w-screen">
        <div className="w-full h-20 bg-white flex flex-row justify-between px-2 items-center rounded-2xl text-DarkText_Color">
          <p>Categories</p>
          <p>16.may,2023</p>
        </div>
        <div className="flex-1 bg-white my-4 rounded-lg p-5 gap-2 flex flex-col">
          <p className="text-lg font-bold text-DarkText_Color">Manage Users</p>
          <hr className="border-t-4" />
          <div className="max-w-screen h-full grid-cols-4 grid px-5  ">
            <form action="" className="col-span-2">
              <InputField lable="Name" value={name} onChange={setname} />
              <InputField lable="Email" value={email} onChange={setemail} />
              <InputField lable="Phone" value={phone} onChange={setphone} />
              <InputField
                lable="Password"
                value={password}
                onChange={setpassword}
              />
              <span>
                <p className="my-2">Imge</p>
                <div className=" flex flex-col items-start gap-5 w-full">
                  <button className="bg-slate-600 hover:bg-slate-500 p-3 text-white flex items-center gap-2 rounded-lg ">
                    <FaImages className="text-xl" />
                    Choose File
                  </button>
                  <input
                    type="text"
                    placeholder="No file chosen"
                    className="outline-none border-b-4 w-[300px]"
                  />
                  <input
                    type="submit"
                    className="bg-slate-600 hover:bg-slate-500 p-3 text-white hover:cursor-pointer rounded-lg w-[150px] "
                  />
                </div>
              </span>
            </form>
            <div className="bg-red-500 col-span-2">
              <p>Entered Text: {name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsersPage;
