import "../style-modules/style.css";
import undone from "../undone.svg";
import trashbin from "../trash.svg";
import done from "../icon.svg";
import { useState } from "react";

function TodoElement({ todo, removeItem, changeCondition, changeTask }) {
 
  const [value, setValue] = useState("");
  const [isEditable, setIsEditable] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      changeTask(todo.key, e.target.value);
      setIsEditable(false);
      setValue("");
    }
    if (e.key === "Escape") {
      setIsEditable(false);
      setValue("");
    }
  }
  console.log(todo);
  return (
    <li key={todo.key}>
      <button
        onClick={() => changeCondition(todo.key)}
        data-tooltip="Undone"
        className="todo-list__button"
      >
        {todo.isDone === false && (
          <img alt="undone" src={undone} className="todo-list__picture" />
        )}
        {todo.isDone === true && (
          <img alt="done" src={done} className="todo-list__picture" />
        )}
      </button>

      <p onClick={() => setIsEditable(true)} className="todo-list__text">
        {isEditable && (
          <input
            onBlur={() => {
              setIsEditable(false);
              setValue("");
            }}
            onChange={handleChange}
            autoFocus
            maxLength="16"
            value={value}
            defaultValue={todo.text}
            onKeyDown={handleKeyDown}
            className="todo-list__input"
          ></input>
        )}
        {!isEditable && <p>{todo.text}</p>}
      </p>

      <p className="todo-list__date">{todo.date}</p>
      <button
        onClick={() => removeItem(todo.key)}
        data-tooltip="Delete"
        className="todo-list__trashbin"
      >
        <img alt="delete" src={trashbin} />
      </button>
    </li>
  );
}

export default TodoElement;
