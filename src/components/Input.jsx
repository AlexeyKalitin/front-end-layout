import "../style-modules/Input.module.css";
import 'antd/dist/antd.css';
import { Input } from 'antd';
import React, { useState } from "react";

function MyInput({ newElemSetter, nonExistYet }) {
  const [value, setValue] = useState("");
  const currentTime = new Date();

  const handleChange = (event) => {
    clearRusSymb(event.target.value);
  };

  const getTime = () => {
    return `${currentTime.getFullYear()}-${currentTime.getMonth() + 1}-${
      currentTime.getDay() + 24
    } ${currentTime.getHours()-3}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
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
          done: false,
          updatedAt: getTime(),
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
