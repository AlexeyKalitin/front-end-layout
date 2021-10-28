import "../style-modules/TodoElement.module.css";
import { useState } from "react";
import { Button, Checkbox } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function TodoElement({ todo, removeTodo, changeTodoCondition, changeTask }) {
  const [isEditable, setIsEditable] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (inputValue[0] !== " " && inputValue !== "" && inputValue.length > 2) {
      if (e.key === "Enter") {
        changeTask(todo, inputValue);
        setIsEditable(false);
      }
      if (e.key === "Escape") {
        setIsEditable(false);
      }
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
      maxLength="25"
      defaultValue={todo.name}
      onKeyDown={handleKeyDown}
      onChange={handleChange}
      value={inputValue}
      className="todo-list__input"
    ></input>
  );

  const currentDataWithoutSymb = () =>
    todo.updatedAt.replace(/[A-Z]|(\.\d{3})/g, " ");

  const makeInputEditable = () => {
    setIsEditable(true);
    setInputValue(todo.name);
  };

  return (
    <li key={todo.key}>
      <Checkbox onClick={() => changeTodoCondition(todo)} checked={todo.done} />
      <span onClick={makeInputEditable} className="todo-list__text">
        {isEditable ? (
          changingInput
        ) : (
          <p
            style={
              todo.done
                ? { color: "black", textDecoration: "line-through" }
                : { color: "black" }
            }
          >
            {todo.name}
          </p>
        )}
      </span>
      <p className="todo-list__date">{currentDataWithoutSymb()}</p>
      <Button
        size="large"
        danger
        onClick={() => removeTodo(todo)}
        icon={<DeleteOutlined />}
      />
    </li>
  );
}

export default TodoElement;
