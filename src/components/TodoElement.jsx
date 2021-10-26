import "../style-modules/TodoElement.module.css";
import undone from "../images/undone.svg";
import trashbin from "../images/trash.svg";
import done from "../images/icon.svg";
import { useState } from "react";

function TodoElement({ todo, removeTodo, changeTodoCondition, changeTask }) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    e.target.className = "todo-list__input";
    if (inputValue[0] !== " " && inputValue !== "" && inputValue.length > 2 ) {
      if (e.key === "Enter") {
        changeTask(todo, inputValue);
        setIsEditable(false);
      }
      if (e.key === "Escape") {
        setIsEditable(false);
      }
    } else {
      e.target.className = "todo-list__input-error";
    }
  };

  const handleChange = (e) => {
    clearRusSymb(e.target.value);
  };

  const clearRusSymb = (string) => {
    setInputValue(string.replace(/[А-Яа-я]/g, ""));
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
      onChange={handleChange}
      value={inputValue}
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
      onClick={() => removeTodo(todo)}
      title="delete"
      className="todo-list__trashbin"
    >
      <img alt="delete" src={trashbin} />
    </button>
  );

  const currentDataWithoutRusSymb = () =>
    todo.updatedAt.replace(/[A-Z]|(\.\d{3})/g, " ");

  const makeInputEditable = () => {
    setIsEditable(true);
    setInputValue(todo.name);
  };

  return (
    <li key={todo.key}>
      {changeConditionButton}
      <span onClick={makeInputEditable} className="todo-list__text">
        {isEditable ? changingInput : <p>{todo.name}</p>}
      </span>
      <p className="todo-list__date">{currentDataWithoutRusSymb()}</p>
      {removeTodoButton}
    </li>
  );
}

export default TodoElement;
