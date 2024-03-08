import React, { useState } from "react";
import { FaAngleUp, FaAngleDown, FaImages, FaFilter } from "react-icons/fa";
import DataTable from "react-data-table-component";

const CategoriesPage = () => {
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
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Age",
      selector: (row) => row.age,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "haile",
      email: "hailetechlover@gmail.com",
      age: "20",
    },
    {
      id: 2,
      name: "baye",
      email: "bayetechlover@gmail.com",
      age: "20",
    },
    {
      id: 3,
      name: "Tamire",
      email: "Tamiretechlover@gmail.com",
      age: "20",
    },
    {
      id: 4,
      name: "haha",
      email: "bayetechlover@gmail.com",
      age: "20",
    },
  ];

  const [isexpanded, setIsexpanded] = useState(false);
  const [initialValue, setInitialValue] = useState("All");

  const [records, setRecords] = useState(data);

  function handleFilter(event) {
    const newData = data.filter((row) => {
      return row.name.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setRecords(newData);
  }
  return (
    <div className="w-full h-screen bg-background ">
      <div className="   h-full w-full py-4">
        <div className=" mx-4  h-full flex flex-col  ">
          <div className=" w-full  h-20 bg-white  flex flex-row  justify-between px-2 items-center rounded-2xl text-DarkText_Color">
            <p>Categories</p>
            <p>16.may,2023</p>
          </div>
          <div className=" bg-white mt-4  rounded-xl w-full h-full grid lg:grid-cols-5 sm:grid-cols-1 overflow-auto ">
            <div className="col-span-3 bg blue w-full m-5 ">
              
              <div>
                <div className=" mt-7 flex flex-col gap-3 font-bold text-DarkText_Color">
                  <span>
                    <p className="py-2">Category Name</p>
                    <input
                      type="text"
                      className=" border-2 border-Inactive_But w-2/3 p-2 outline-none "
                    />
                  </span>
                  <span className="w-full  ">
                    <p className="py-2">Description</p>
                    <textarea
                      name="desctiption"
                      id="1"
                      cols="70"
                      rows="2"
                      className="outline-none  border-2 border-Inactive_But "
                    ></textarea>
                  </span>
                  <span className="flex justify-between w-full items-start">
                    <div className=" flex flex-col items-start gap-5 w-full">
                      <p>Imge</p>
                      <button className="bg-slate-600 hover:bg-slate-500 p-3 text-white flex items-center gap-2 rounded-lg ">
                        <FaImages className="text-xl" />
                        Choose File
                      </button>
                      <input
                        type="text"
                        placeholder="No file chosen"
                        className="outline-none border-b-4"
                      />
                      <input
                        type="submit"
                        className="bg-slate-600 hover:bg-slate-500 p-3 text-white hover:cursor-pointer rounded-lg w-[150px] "
                      />
                    </div>
                    <div className=" relative right-20 ">
                      <div
                        className={`w-[120px] ${
                          isexpanded ? "h-[150px]" : "h-[50px]"
                        }  relative`}
                      >
                        <button
                          className="w-full bg-slate-600 text-white h-[50px] flex items-center justify-around rounded-lg"
                          onClick={() => {
                            setIsexpanded(!isexpanded);
                          }}
                        >
                          <p>{initialValue}</p>
                          {isexpanded ? <FaAngleDown /> : <FaAngleUp />}
                        </button>
                        {isexpanded ? (
                          <div className="flex flex-col    mt-2  items-center bg-background h-full">
                            {CategoryOptions.map((item, index) => {
                              return (
                                <div
                                  key={item.id}
                                  className="bg-slate-400 hover:bg-slate-600 hover:cursor-pointer text-white w-full flex justify-center mb-1 py-3 "
                                  onClick={() => {
                                    setInitialValue(item.name);
                                    setIsexpanded(!isexpanded);
                                  }}
                                >
                                  {item.name}
                                </div>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </span>
                </div>
              </div>
            </div>
            <div className="   bg-white  mr-2  col-span-2  ">
              <div className="flex flex-row flex-wrap gap-1 items-center w-full  mt-5 justify-center">
                <button className="w-[80px] h-[40px] bg-slate-300 text-DarkText_Color rounded-md">
                  Export
                </button>
                <input
                  type="text"
                  placeholder="Search ..."
                  className="outline-none border border-Darker p-2 w-[300px]"
                  onChange={handleFilter}
                />
                <div
                  className="w-[30px] h-[30px] bg-slate-300 text-DarkText_Color hover:bg-slate-200 hover:cursor-pointer  flex items-center justify-center "
                  onClick={console.log("this is the filter Button")}
                >
                  <FaFilter />
                </div>
              </div>
              <DataTable
                columns={columns}
                data={records}
                selectableRows
                fixedHeader
                pagination
              ></DataTable>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
