import "../style-modules/Input.module.css";
import React, { useState } from "react";

function Input({ newElemSetter }) {
  const [value, setValue] = useState("");
  const currentDate = new Date();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handlerOnKeyDown = e => {
    if (value[0] !== " " && value !== "") {
      if (e.key === "Enter") {
        const newElem = {
          key: currentDate.getTime(),
          text: value,
          isDone: false,
          date: `${currentDate.getDay()}.${currentDate.getMonth() + 1
            }.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
        };
        setValue("");
        newElemSetter(newElem);
      }
    }
  }


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
