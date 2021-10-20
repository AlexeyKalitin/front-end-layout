import "../style-modules/style.css";
import React, { useState } from "react";

function Input({newElemSetter}) {
  const [value, setValue] = useState("");
  const currentDate = new Date();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="input">
      <input
        onKeyDown={(ev) => {
          if (ev.key === "Enter") {
            const newElem = {
              key: currentDate.getTime(),
              text: value,
              date: `${currentDate.getDay()}.${
                currentDate.getMonth() + 1
              }.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
              isDone: false,
            };
            setValue("");
            newElemSetter(newElem);
          }
        }}
        value={value}
        onChange={handleChange}
        placeholder="Type task"
        autoFocus
        name="stateAttrName"
        className="todo__text"
        type="text"
      />
    </div>
  );
}

export default Input;
