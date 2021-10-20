import "../style-modules/style.css";
import undone from "../undone.svg";
import trashbin from "../trash.svg";
import done from "../icon.svg";
import { useState } from "react";

function TodoElement({ todo, removeItem, changeCondition, changeTask }) {

  const [isEditable, setIsEditable] = useState(false);

  const handleKeyDown = e => {
    e.target.className="todo-list__input"
    if (e.target.value[0] !== " " && e.target.value !== "") {
      if (e.key === "Enter") {
        changeTask(todo.key, e.target.value);
        setIsEditable(false);
      }
      if (e.key === "Escape") {
        setIsEditable(false);
      }
    } else {
      e.target.className="todo-list__input-error";
    }
  }


  return (
    <li key={todo.key}>
      <button
        onClick={() => changeCondition(todo.key)}
        title="done"
        className="todo-list__button"
      >
        {todo.isDone === false && (
          <img alt="undone" src={undone} className="todo-list__picture" />
        )}
        {todo.isDone === true && (
          <img alt="done" src={done} className="todo-list__picture" />
        )}
      </button>

      <span onClick={() => setIsEditable(true)} className="todo-list__text">
        {isEditable && (
          <input
            onBlur={() => {
              setIsEditable(false);
            }}
            autoFocus
            maxLength="16"
            defaultValue={todo.text}
            onKeyDown={handleKeyDown}
            className="todo-list__input"
          ></input>
        )}
        {!isEditable && <p>{todo.text}</p>}
      </span>

      <p className="todo-list__date">{todo.date}</p>
      <button
        onClick={() => removeItem(todo.key)}
        title="delete"
        className="todo-list__trashbin"
      >
        <img alt="delete" src={trashbin} />
      </button>
    </li>
  );
}

export default TodoElement;
