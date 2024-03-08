import React, { useState } from "react";

const TextformfieldWithSideLable = (props) => {
  const [inputValue, setInputValue] = useState(props.value || "");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    if (props.onChange) {
      props.onChange(newValue);
    }
  };
  return (
    <div>
      <span className="flex flex-row gap-2 items-center">
        <label
          htmlFor="name "
          className="text-DarkText_Color font-bold text-lg "
        >
          {props.lable}
        </label>
        <input
          id="name"
          type="text"
          value={inputValue}
          onChange={handleChange}
          className=" border-2 border-DarkText_Color outline-none w-full p-2  "
        />
      </span>
    </div>
  );
};

export default TextformfieldWithSideLable;
