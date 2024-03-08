import React, { useState } from "react";
import {
  FaHome,
  FaBuromobelexperte,
  FaUserCog,
  FaQuestionCircle,
  FaExclamationCircle,
  FaBell,
  FaChevronCircleLeft,
  FaChevronCircleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Images from "../assets/index";

const Sidebar = () => {
  const MenuList = [
    {
      id: 1,
      icon: <FaHome />,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      icon: <FaBuromobelexperte />,
      name: "Categories",
      path: "/Categories",
    },
    {
      id: 3,
      icon: <FaUserCog />,
      name: "Manage Users",
      path: "/MangeUser",
    },
    {
      id: 4,
      icon: <FaQuestionCircle />,
      name: "Manage Questions",
      path: "/ManageQuestions",
    },
    {
      id: 5,
      icon: <FaExclamationCircle />,
      name: "Question Reports",
      path: "/QuestionReports",
    },
    {
      id: 6,
      icon: <FaBell />,
      name: "Send Notification",
      path: "/SendNotification",
    },
  ];

  const [open, setOpen] = useState(true);
  return (
    <div
      className={`h-screen ${
        open ? "w-80" : "w-20"
      }  bg-white relative flex flex-col gap-10 `}
    >
      <div
        className=" absolute -right-3 top-7 text-3xl text-Text_Color"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <FaChevronCircleLeft /> : <FaChevronCircleRight />}
      </div>

      <div className=" w-full h-36">
        {open ? (
          <img
            src={Images.QuizLogo}
            alt=""
            className="object-cover object-center w-full h-full"
          />
        ) : null}
      </div>
      <nav>
        <ul>
          {MenuList.map((item) => {
            return (
              <Link key={item.id} to={item.path}>
                <li className="flex gap-3 items-center hover:bg-background my-4 h-14 shadow-sm text-lg font-semibold">
                  {open ? (
                    <div className="bg-blue-500 w-2 h-full rounded-r-lg"> </div>
                  ) : null}

                  <span className=" text-3xl">{item.icon}</span>
                  {open ? <span>{item.name}</span> : null}
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
