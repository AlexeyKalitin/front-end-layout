import React from "react";
import "../style.css";
import undone from "../undone.svg";
import trashbin from "../trash.svg";
import done from "../icon.svg";
import arrowdown from "../arrowdown.svg";

function TodoList(props) {
  const { list, remove, changeCondition } = props;
  console.log(list);
  console.log(remove);

  return (
    <ul className="todo-list">
      {list.map((task, index) => {
        return (
          <li key={list.key}>

            {task.isDone ===false && (
              <button 
              onClick={() => changeCondition(task.key)}
              data-tooltip="Undone" className="todo-list__button">
                <img src={undone} className="todo-list__picture" />
              </button>
            )}

            {task.isDone ===true && (
              <button data-tooltip="Done" className="todo-list__button">
                <img src={done} className="todo-list__picture" />
              </button>
            )}

            <p className="todo-list__text" key={index}>
              {task.text}
            </p>
            <p className="todo-list__date">{task.date}</p>

            <button
              onClick={() => remove(task.key)}
              title="Delete task"
              className="todo-list__trashbin"
            >
              <img src={trashbin} alt="Кнопка «button»" />
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
