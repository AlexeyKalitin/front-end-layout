import React from "react";
import "../style.css";
import arrowup from "../arrowup.svg";
import trashbin from "../trash.svg";
import icon from "../icon.svg";
import arrowdown from "../arrowdown.svg";

function TodoList(props) {
  const current = new Date();
  return (
    <ul className="todo-list">
      {props.list.map((task, index) => {
        return (
          <li>
            <button data-tooltip="Done" className="todo-list__button">
              <img src={icon} className="todo-list__picture" />
            </button>
            <p className="todo-list__text" key={index}>
              {task}
            </p>
            <p className="todo-list__date">{`${current.getDate()}.${
              current.getMonth() + 1
            }.${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`}</p>
            <button title="Delete task" className="todo-list__trashbin">
              <img src={trashbin} alt="Кнопка «button»" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
