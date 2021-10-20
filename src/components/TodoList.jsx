import "../style-modules/style.css";
import TodosElement from "./TodoElement";

function TodoList( { todos, removeItem, changeCondition, changeTask }) {

  if (todos.length === 0) {
    return <h1 style={{ marginTop: "2vw" }}>Nothing...</h1>;
  } else {
    return (
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <TodosElement
              todo={todo}
              removeItem={removeItem}
              changeCondition={changeCondition}
              changeTask={changeTask}
            ></TodosElement>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
