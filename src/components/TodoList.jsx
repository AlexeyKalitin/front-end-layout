import React from "react";
import "../style.css"
import arrowup from "../arrowup.svg";
import trashbin from "../trash.svg";
import icon from "../icon.svg";
import arrowdown from "../arrowdown.svg";
function TodoList() {
    return (
    <ul className="todo-list">
          <li>
            <button data-tooltip="Done" className="todo-list__button">
              <img src={icon} className="todo-list__picture" />
            </button>
            <p className="todo-list__text">Task 1</p>
            <p className="todo-list__date">21.01.2000</p>
            <button title="Delete task" className="todo-list__trashbin">
              <img src={trashbin} alt="Кнопка «button»" />
            </button>
          </li>
          <li>
            <button data-tooltip="Done" className="todo-list__button">
              <img src={icon} className="todo-list__picture" />
            </button>
            <p className="todo-list__text">Task 2</p>
            <p className="todo-list__date">14.10.2021</p>
            <button title="Delete task" className="todo-list__trashbin">
              <img src={trashbin} alt="Кнопка «button»" />
            </button>
          </li>
          <li>
            <button data-tooltip="Done" className="todo-list__button">
              <img src={icon} className="todo-list__picture" />
            </button>
            <p className="todo-list__text">Task 3</p>
            <p className="todo-list__date">13.10.2021</p>
            <button title="Delete task" className="todo-list__trashbin">
              <img src={trashbin} alt="Кнопка «button»" />
            </button>
          </li>
        </ul>)
}
export default TodoList;