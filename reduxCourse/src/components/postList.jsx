import React from "react";
import { selectAllPosts } from "../state/postslice";
import { useSelector, useDispatch } from "react-redux";

const postList = () => {
  const posts = useSelector(selectAllPosts);
  const dispacher = useDispatch();
  if (!posts) {
    return <div>No posts available</div>;
  }

  return (
    <div className="w-full h-full">
      {posts.map((post) => {
        return (
          <div
            className="rounded-lg p-5 border-2 border-gray-400 w-[300px] mb-5 "
            key={post.id}
          >
            <p>{post.title}</p>
            <p>{post.content.substring(0, 100)}</p>
            <p>by {"haile"} less than 10 minutes ago</p>
          </div>
        );
      })}
    </div>
  );
};

export default postList;
