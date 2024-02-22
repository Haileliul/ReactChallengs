import React from "react";

const StackDivsConsecutively = () => {
  return (
    <div className="flex flex-col">
      <div className="h-16 w-16 bg-red-500 mb-4 p-10 relative">
        <div className="h-12 w-12 bg-yellow-500  absolute bottom-0 left-0"></div>
      </div>

      <div className="h-16 w-16 bg-green-500 mb-4 relative top-"></div>
    </div>
  );
};

export default StackDivsConsecutively;
