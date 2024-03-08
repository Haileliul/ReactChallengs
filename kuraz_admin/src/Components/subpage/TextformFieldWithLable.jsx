import React, { useState } from "react";

const TextformFieldWithLable = (props) => {
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
      <span className="flex flex-col gap-1">
        <label
          htmlFor="name "
          className="text-DarkText_Color font-bold text-lg"
        >
          {props.lable}
        </label>
        <input
          id="name"
          type="text"
          value={inputValue}
          onChange={handleChange}
          className=" border-2 border-DarkText_Color outline-none w-[300px] p-2  "
        />
      </span>
    </div>
  );
};

export default TextformFieldWithLable;
