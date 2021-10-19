import "../style-modules/style.css";
import undone from "../undone.svg";
import trashbin from "../trash.svg";
import done from "../icon.svg";
import { useState } from "react";

function TodoElement(props) {
  const { todo, removeItem, changeCondition, changeTask} = props;
  const [value,setValue] = useState("");
  const [newValue,setNewValue] = useState("");
  const [focusStatus, setFocusStatus] = useState(true);

  
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <li key={todo.key}>
      {todo.isDone === false && (
        <button
          onClick={() => changeCondition(todo.key)}
          data-tooltip="Undone"
          className="todo-list__button"
        >
          <img alt="undone" src={undone} className="todo-list__picture" />
        </button>
      )}

      {todo.isDone === true && (
        <button data-tooltip="Done" className="todo-list__button">
          <img alt="done" src={done} className="todo-list__picture" />
        </button>
      )}

      <input
        onChange={handleChange}
        defaultValue={todo.text+newValue}
        
        onKeyDown={(ev) => {
          if (ev.keyCode === 13) {
            console.log(ev.target.value);
            changeTask(todo.key,ev.target.value)
           
          }
        }}
        onKeyDown={(ev) => {
          if (ev.keyCode === 27) {
            setNewValue("")
            setValue(newValue)
          }
          
        }}
        className="todo-list__text"
      ></input>
      <p className="todo-list__date">{todo.date}</p>
      <button
        onClick={() => removeItem(todo.key)}
        data-tooltip="Delete"
        className="todo-list__trashbin"
      >
        <img alt="delete" src={trashbin} />
      </button>
    </li>
  );
}

export default TodoElement;
