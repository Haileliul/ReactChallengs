import React, { useState } from "react";

import Textfield from "../Components/subpage/TextformfieldWithSideLable";
import Dropdown from "../Components/subpage/dropdownButton";
const ManageQuestionsPage = () => {
  const CategoryOptions = [
    {
      id: 1,
      name: "Acadamic",
      value: 1,
    },
    {
      id: 2,
      name: "General",
      value: 2,
    },
    {
      id: 3,
      name: "Mission",
      value: 0,
    },
  ];
  const [isexpanded, setIsexpanded] = useState(false);
  const [initialValue, setInitialValue] = useState("All");

  const [category, setcategory] = useState("");
  const [subcategory, setsubcategory] = useState("");
  const [optionA, setoptionA] = useState("");
  const [optionB, setoptionB] = useState("");
  const [optionC, setoptionC] = useState("");
  const [optionD, setoptionD] = useState("");
  const [difficulti, setdifficulti] = useState("");
  const [answer, setanswer] = useState("");
  const [description, setdescription] = useState("");

  return (
    <div className="bg-background max-w-screen min-h-screen p-4">
      <div className="w-full h-20 bg-white flex flex-row justify-between px-2 items-center rounded-2xl text-DarkText_Color ">
        <p>Categories</p>
        <p>16.may,2023</p>
      </div>
      <div className="flex-1 bg-white my-4 rounded-lg p-5 gap-2 flex flex-col">
        <p className="text-lg font-bold text-DarkText_Color">
          Create Questions
        </p>
        <hr className="border-t-4" />
        <div className="p-10 flex flex-col gap-5">
          <span className="w-full h-full grid grid-cols-2 gap-10">
            <Dropdown data={CategoryOptions} lable="Category" />
            <Dropdown data={CategoryOptions} lable="Sub_Category" />
          </span>
          <span className="w-full flex  gap-2 ">
            <p className="py-2">Question</p>
            <textarea
              name="desctiption"
              id="1"
              cols="70"
              rows="2"
              className="outline-none  border-2 border-Inactive_But w-full "
            ></textarea>
          </span>
          <span className="w-full h-full grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-2">
              <Textfield lable="A" value={optionA} onChange={setoptionA} />
              <Textfield lable="B" value={optionB} onChange={setoptionB} />
              <span className="w-[200px]">
                <Dropdown data={CategoryOptions} lable="Defficulti" />
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <Textfield lable="C" value={optionC} onChange={setoptionC} />
              <Textfield lable="D" value={optionD} onChange={setoptionD} />
              <span className="w-[200px]">
                <Dropdown data={CategoryOptions} lable="Answer" />
              </span>
            </div>
          </span>
          <span className="w-full flex  gap-2 ">
            <p className="py-2">Question</p>
            <textarea
              name="desctiption"
              id="1"
              cols="70"
              rows="2"
              className="outline-none  border-2 border-Inactive_But w-full "
            ></textarea>
            <input
              type="submit"
              className="bg-slate-600 hover:bg-slate-500 p-3 text-white hover:cursor-pointer rounded-lg w-[150px] "
            />
          </span>
          <hr className="border-t-2" />
        </div>
      </div>
    </div>
  );
};

export default ManageQuestionsPage;
