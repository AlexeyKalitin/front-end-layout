import "./style-modules/style.css";
import React, { useState } from "react";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Paginate from "./components/Paginate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [todosPerPage] = useState(5);

  function todosFilter(status) {
    if (status === "all") {
      setFilterTodos(todos);
    } else {
      setFilterTodos(todos.filter((item) => item.isDone === status));
    }
    setCurrentPage(0);
  }

  const handlerRemoveTodo = (key) => {
    setTodos(todos.filter((x) => x.key !== key));
    setFilterTodos(filterTodos.filter((x) => x.key !== key));
  };

  const handlerChangeTodoCondition = (key) => {
    let upgradedElem = todos.slice(0);
    todos.forEach((elem, ind) => {
      if (elem.key === key) {
        upgradedElem[ind].isDone = true;
      }
    });
    setTodos(upgradedElem);

    upgradedElem = filterTodos.slice(0);
    filterTodos.forEach((elem, ind) => {
      if (elem.key === key) {
        upgradedElem[ind].isDone = true;
      }
    });
    setFilterTodos(upgradedElem);
  };

  const handlerChangeTask = (key, newText) => {
    let upgradedElem = todos.slice(0);
    todos.forEach((elem, ind) => {
      if (elem.key === key) {
        upgradedElem[ind].text = newText;
      }
    });
    setTodos(upgradedElem);

    upgradedElem = filterTodos.slice(0);
    filterTodos.forEach((elem, ind) => {
      if (elem.key === key) {
        upgradedElem[ind].text = newText;
      }
    });
    setFilterTodos(upgradedElem);
  };

  const handlerNewElemSetter = (newElem) => {
    setTodos([...todos, newElem]);
    setFilterTodos([...filterTodos, newElem]);
  };

  const handlerSetSortStatus = (sortStatus) => {
    let sortedTodos = filterTodos.sort((a, b) => a.key - b.key).slice(0);
    if (sortStatus === "down") {
      sortedTodos = filterTodos.sort((a, b) => b.key - a.key).slice(0);
    }
    setFilterTodos(sortedTodos);
  };

  return (
    <div className="conteiner">
      <div>
        <div className="todo">
          <h1>ToDo</h1>
          <Input
            newElemSetter={(newElem) => handlerNewElemSetter(newElem)}
          ></Input>
        </div>
        <Filter
          todosFilter={(status) => todosFilter(status)}
          setSortStatus={(sortStatus) => handlerSetSortStatus(sortStatus)}
        />
        <div className="todo-main"></div>
      </div>
      <TodoList
        todos={filterTodos.slice(
          currentPage * todosPerPage,
          currentPage * todosPerPage + todosPerPage
        )}
        removeTodo={(key) => handlerRemoveTodo(key)}
        changeTodoCondition={(key) => handlerChangeTodoCondition(key)}
        changeTask={(key, newText) => handlerChangeTask(key, newText)}
      ></TodoList>
      {todos.length > 0 && (
        <Paginate
          setCurrentPage={(value) => setCurrentPage(value)}
          currentPage={currentPage}
          countTodoElem={filterTodos.length}
          countElemPerPage={todosPerPage}
        ></Paginate>
      )}
    </div>
  );
}

export default App;
