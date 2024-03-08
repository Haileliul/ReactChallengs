import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import { postAdded } from "../state/postslice";
import { selectAllUsers } from "../state/usersslice";
import PostList from "../components/postList";

const Postpager = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setuserId] = useState("");
  const dispacher = useDispatch();
  const users = useSelector(selectAllUsers);

  const onSaveHandler = () => {
    if (title && content) {
      dispacher(postAdded(title, content, userId));
    }
    setTitle("");
    setContent("");
  };

  const userOptions = users.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    );
  });
  return (
    <div className="w-full h-full bg-blue-950 flex justify-center items-center">
      <div className="w-[400px] h-[600px] bg-white flex flex-col p-10">
        <div className="mb-10">
          <p className="py-5 font-bold text-lg">This is the place for me</p>
          <span className="flex flex-col ">
            <label htmlFor="title">Post Title</label>
            <div className="bg-gray-200 w-fit">
              <input
                type="text"
                id="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                className="outline-blue-400 bg-transparent indent-2 py-2 w-[300px]"
              />
            </div>
          </span>
          <span className="flex flex-col">
            <label htmlFor="Author">Author</label>
            <div className="bg-gray-200 w-fit">
              <select
                name="Author"
                id="Author"
                value={userId}
                onChange={(event) => {
                  setuserId(event.target.value);
                }}
              >
                {userOptions}
              </select>
            </div>
          </span>
          <span className="flex flex-col">
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              cols="2"
              rows="2"
              value={content}
              onChange={(event) => {
                setContent(event.target.value);
              }}
              className="outline-blue-400  border-2 w-[300px] "
            />
          </span>
          <button
            className=" h-[30px] bg-gray-400 mt-5 w-[300px] "
            onClick={onSaveHandler}
          >
            Save Post
          </button>
        </div>

        {/* ====================This is the human anatomy ================== */}
        <div className="h-full overflow-auto">
          <PostList />
        </div>
      </div>
    </div>
  );
};

export default Postpager;
