import "../style-modules/TodoList.module.css";
import TodosElement from "./TodoElement";

function TodoList({ todos, removeTodo, changeTodoCondition, changeTask }) {
  if (todos.length === 0) {
    return <h1 style={{ marginTop: "2vw" }}>Nothing...</h1>;
  } else {
    return (
      <ul className="todo-list">
        {todos.map((todo, index) => {
          return (
            <TodosElement
              key={index}
              todo={todo}
              removeTodo={removeTodo}
              changeTodoCondition={changeTodoCondition}
              changeTask={changeTask}
            ></TodosElement>
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
