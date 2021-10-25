import "../style-modules/Input.module.css";
import React, { useState } from "react";

function Input({ newElemSetter }) {
  const [value, setValue] = useState("")
  const currentTime = new Date()

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const getTime = () =>{
   return `${currentTime.toLocaleDateString()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
  }

  const handlerOnKeyDown = (e) => {
    if (value[0] !== " " && value !== "") {
      if (e.key === "Enter") {
        const newElem = {
          key: currentTime.getTime(),
          text: value,
          isDone: false,
          date: getTime(),
        };
        setValue("");
        newElemSetter(newElem);
      }
    }
  };

  return (
    <div className="input">
      <input
        onKeyDown={handlerOnKeyDown}
        value={value}
        onChange={handleChange}
        placeholder="Type task"
        autoFocus
        maxLength="16"
        className="todo__text"
      />
    </div>
  );
}

export default Input;
