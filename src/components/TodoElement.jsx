import "../style-modules/TodoElement.module.css";
import undone from "../images/undone.svg";
import trashbin from "../images/trash.svg";
import done from "../images/icon.svg";
import { useState } from "react";

function TodoElement({ todo, removeTodo, changeTodoCondition, changeTask }) {
  const [isEditable, setIsEditable] = useState(false);

  const handleKeyDown = (e) => {
    e.target.className = "todo-list__input";
    if (e.target.value[0] !== " " && e.target.value !== "") {
      if (e.key === "Enter") {
        changeTask(todo.key, e.target.value);
        setIsEditable(false);
      }
      if (e.key === "Escape") {
        setIsEditable(false);
      }
    } else {
      e.target.className = "todo-list__input-error";
    }
  };

  return (
    <li key={todo.key} >
      <button
        onClick={() => changeTodoCondition(todo.key)}
        title="done"
        className="todo-list__button"
      >
        <img
          alt="undone"
          src={todo.isDone === false ? undone : done}
          className="todo-list__picture"
        />
      </button>

      <span onClick={() => setIsEditable(true)} className="todo-list__text">
        {isEditable ? (
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
        ) : (
          <p>{todo.text}</p>
        )}
      </span>

      <p className="todo-list__date">{todo.date}</p>
      <button
        onClick={() => removeTodo(todo.key)}
        title="delete"
        className="todo-list__trashbin"
      >
        <img alt="delete" src={trashbin} />
      </button>
    </li>
  );
}

export default TodoElement;
