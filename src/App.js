import arrowup from "./arrowup.svg";
import "./App.css";
import trashbin from "./trash.svg";
import icon from "./icon.svg";
import arrowdown from "./arrowdown.svg";
import "./style.css"
import React from "react";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="conteiner">
      <div className="todo">
        <h1>TODO</h1>
        <div className="input">
          <input placeholder="Type task" className="todo__text" type="text" />
        </div>
      </div>
      <span className="filter">
        <span className="filter-buttons">
          <button className="filter__button-all">all</button>
          <button className="filter__button-done">done</button>
          <button className="filter__button-undone">undone</button>
        </span>
        <span className="filter-sort">
          <p style={{ marginRight: 11 }}>Sort by Date</p>
          <button className="filter__arrow-down">
            <img src={arrowdown} />
          </button>
          <button className="filter__arrow-up">
            <img src={arrowup} />
          </button>
        </span>
      </span>
      <div className="todo-main">
        <TodoList></TodoList>
      </div>
      <span className="changer">
        <button className="changer__button">&lt;&lt;</button>
        <button className="changer__button">1</button>
        <button className="changer__button">2</button>
        <button className="changer__button">3</button>
        <button className="changer__button">4</button>
        <button className="changer__button">5</button>
        <button className="changer__button">&gt;&gt;</button>
      </span>
    </div>
  );
}

export default App;
