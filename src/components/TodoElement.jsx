import "../style-modules/style.css";
import undone from "../undone.svg";
import trashbin from "../trash.svg";
import done from "../icon.svg";

function TodoElement(props) {
  const { todo, removeItem, changeCondition } = props;
  console.log(removeItem);
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

      <p className="todo-list__text">
        {todo.text}
      </p>
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
