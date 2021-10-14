import arrowup from "./arrowup.svg";
import arrowdown from "./arrowdown.svg";
import "./style.css"
import React, { useState } from 'react';
import TodoList from "./components/TodoList";

function App() {
  const initialValue = ["2"]
  const [list, setList] = useState(initialValue);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div className="conteiner">
      <div className="todo">
        <h1>TODO</h1>
        <div className="input">
          <input
            onKeyDown={(ev) => {
              if (ev.keyCode == 13) {
                setList([...list, value]);
                setValue("")
              }
            }
            }
            value={value}
            onChange={handleChange}
            placeholder="Type task"
            autoFocus
            name="stateAttrName"
            className="todo__text"
            type="text" />
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
        <TodoList list={list} />
      </div>
      <span className="changer">
        <button className="changer__button">&gt;&gt;</button>
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
