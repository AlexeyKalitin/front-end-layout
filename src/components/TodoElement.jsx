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
        changeTask(todo, e.target.value);
        setIsEditable(false);
      }
      if (e.key === "Escape") {
        setIsEditable(false);
      }
    } else {
      e.target.className = "todo-list__input-error"; //ok?
    }
  };

  const changingInput = (
    <input
      onBlur={() => {
        setIsEditable(false);
      }}
      autoFocus
      maxLength="16"
      defaultValue={todo.name}
      onKeyDown={handleKeyDown}
      className="todo-list__input"
    ></input>
  );

  const changeConditionButton = (
    <button
      onClick={() => changeTodoCondition(todo)}
      title="done"
      className="todo-list__button"
    >
      <img
        alt="undone"
        src={todo.done === false ? undone : done}
        className="todo-list__picture"
      />
    </button>
  );

  const removeTodoButton = (
    <button
      onClick={() => removeTodo(todo.uuid)}
      title="delete"
      className="todo-list__trashbin"
    >
      <img alt="delete" src={trashbin} />
    </button>
  );

  return (
    <li key={todo.key}>
      {changeConditionButton}
      <span onClick={() => setIsEditable(true)} className="todo-list__text">
        {isEditable ? changingInput : <p>{todo.name}</p>}
      </span>
      <p className="todo-list__date">{todo.updatedAt}</p>
      {removeTodoButton}
    </li>
  );
}

export default TodoElement;
