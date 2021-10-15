import "../style-modules/style.css";
import undone from "../undone.svg";
import trashbin from "../trash.svg";
import done from "../icon.svg";

function TodoList(props) {
  const { list, remove, changeCondition, ElemCount } = props;
  if (list.length === 0) {
    return <h1 style={{ marginTop: "2vw" }}>Nothing...</h1>;
  } else {
    return (
      <ul className="todo-list">
        {list.slice(0,4).map( task => {
          return (
            <li key={task.key}>
              {task.isDone === false && (
                <button
                  onClick={() => changeCondition(task.key)}
                  data-tooltip="Undone"
                  className="todo-list__button"
                >
                  <img alt="undone" src={undone} className="todo-list__picture" />
                </button>
              )}

              {task.isDone === true && (
                <button data-tooltip="Done" className="todo-list__button">
                  <img alt="done" src={done} className="todo-list__picture" />
                </button>
              )}

              <p className="todo-list__text">
                {task.text}
              </p>
              <p className="todo-list__date">{task.date}</p>
              <button
                onClick={() => remove(task.key)}
                data-tooltip="Delete"
                className="todo-list__trashbin"
              >
                <img alt="delete" src={trashbin}/>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
