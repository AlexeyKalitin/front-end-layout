import "./style-modules/style.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Paginate from "./components/Paginate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [todosPerPage] = useState(5);

  useEffect(() => {
    try{
    const fetch = JSON.parse(localStorage.getItem("Todos"));
    console.log(fetch)
    setFilterTodos(fetch === "" || fetch === null || fetch === undefined? [] : fetch);
    setTodos(fetch === "" || fetch === null || fetch === undefined? [] : fetch);}
    catch(e){
      console.log(e)
    }
  }, []);

  function todosFilter(status) {
    if (status === "all") {
      setFilterTodos(todos);
    } else {
      setFilterTodos(todos.filter((item) => item.isDone === status));
    }
    setCurrentPage(0);
  }

  const SetThreeState = (first, second, third) => {
    setTodos(first);
    setFilterTodos(second);
    localStorage.setItem("Todos", third);
  };

  const handlerRemoveTodo = (key) => {
    SetThreeState(
      todos.filter((x) => x.key !== key),
      filterTodos.filter((x) => x.key !== key),
      JSON.stringify(todos.filter((x) => x.key !== key))
    );
  };

  const replaceElementField = (elem,field,value)=>{
    if(field === "isDone"){
      elem.isDone = value
    }
    if(field === "text"){
      elem.text = value
    }
  }

  const handlerChangeTodoCondition = (elem) => {
    const todosIndex = todos.indexOf(elem)
    const filterTodosIndex = filterTodos.indexOf(elem)
    replaceElementField(elem,"isDone", !elem.isDone)
    todos[todosIndex] = elem
    filterTodos[filterTodosIndex] = elem
    SetThreeState(
      todos.slice(0),
      filterTodos.slice(0),
      JSON.stringify(todos)
    )
  };

  const handlerChangeTask = (elem, newText) => {
    const todosIndex = todos.indexOf(elem)
    const filterTodosIndex = filterTodos.indexOf(elem)
    replaceElementField(elem,"text", newText.slice(0))
    todos[todosIndex] = elem
    filterTodos[filterTodosIndex] = elem
    SetThreeState(
      todos.slice(0),
      filterTodos.slice(0),
      JSON.stringify(todos.slice(0))
    )
  };

  const handlerNewElemSetter = (newElem) => {
    SetThreeState(
      [...todos, newElem],
      [...filterTodos, newElem],
      JSON.stringify([...todos, newElem])
    )
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
        changeTodoCondition={(elem) => handlerChangeTodoCondition(elem)}
        changeTask={(elem, newText) => handlerChangeTask(elem, newText)}
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
