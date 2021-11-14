import "../style-modules/Input.module.css";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import React, { useState } from "react";
const date = new Date();
function MyInput({ newElemSetter, nonExistYet }) {
  const [value, setValue] = useState("");
  const currentTime = new Date();

  const handleChange = (event) => {
    clearRusSymb(event.target.value);
  };

  const clearRusSymb = (string) => {
    setValue(string.replace(/[А-Яа-я]/g, ""));
  };

  const handlerOnKeyDown = (e) => {
    if (
      value[0] !== " " &&
      value !== "" &&
      value.length > 2 &&
      nonExistYet(value)
    ) {
      if (e.key === "Enter") {
        const newElem = {
          key: currentTime.getTime(),
          name: value,
          isDone: false,
          updatedAt: date.toISOString(),
        };
        setValue("");
        newElemSetter(newElem);
      }
    }
  };

  return (
    <div className="input">
      <Input
        onKeyDown={handlerOnKeyDown}
        value={value}
        onChange={handleChange}
        placeholder="Type task"
        autoFocus
        maxLength="25"
        className="todo__text"
      />
    </div>
  );
}

export default MyInput;
