import "./style-modules/style.css"
import React, { useState } from 'react';
import Input from "./components/Input"
import Filter from "./components/Filter"
import Paginate from "./components/Paginate"
import TodoList from "./components/TodoList";
function App() {

  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [todosPerPage] = useState(5);
  console.log("render")
  function todosFilter(status) {
    if (status === "all") {
      setFilterTodos(todos)
    } else {
      setFilterTodos(todos.filter(item => item.isDone === status));
    }
    setCurrentPage(0)
  }

  const removeItem = id => {
    setTodos(todos.filter(x => (x.key !== id)))
    setFilterTodos(filterTodos.filter(x => (x.key !== id)))
    if (((filterTodos.length - 2) / todosPerPage) < currentPage && currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const changeCondition = key => {
    const upgradedElem = todos.map(item => {
      if (item.key === key) {
        return Object.assign({}, item, { isDone: true })
      }
      return item
    })
    const upgradedFilterElem = filterTodos.map(item => {
      if (item.key === key) {
        return Object.assign({}, item, { isDone: true })
      }
      return item
    })
    setTodos(upgradedElem)
    setFilterTodos(upgradedFilterElem)
  }

  const handlerChangeTask = (elem, newText) => {
    const upgradedElem = todos.map(item => {
      if (item.key === elem) {
        return Object.assign({}, item, { text: newText })
      }
      return item
    })
    setTodos(upgradedElem)
    setFilterTodos(upgradedElem)
  }

  const handlerNewElemSetter = newElem => {
    setTodos([...todos, newElem])
    setFilterTodos([...todos, newElem])
  }

  const handlerSetSortStatus = sortStatus => {
    const newMass = []
    let sortedTodos = filterTodos.sort((a, b) => a.key - b.key)
    if (sortStatus === "down") {
      sortedTodos = filterTodos.sort((a, b) => b.key - a.key)
    }

    Object.assign(newMass, sortedTodos)
    setFilterTodos(newMass);
  }

  return (
    <div className="conteiner">
      <div>

        <div className="todo">
          <h1>ToDo</h1>

          <Input newElemSetter={newElem => handlerNewElemSetter(newElem)}></Input>
        </div>
        <Filter todosFilter={(status) => todosFilter(status)} setSortStatus={(sortStatus) => handlerSetSortStatus(sortStatus)} />
        <div className="todo-main">
        </div>
      </div>
      <TodoList
        todos={filterTodos.slice(currentPage * todosPerPage, currentPage * todosPerPage + todosPerPage)}
        removeItem={(id) => removeItem(id)}
        changeCondition={(key) => changeCondition(key)}
        changeTask={(elem, newText) => handlerChangeTask(elem, newText)}>
      </TodoList>
      {todos.length > 0 && (
        <Paginate
          setCurrentPage={(value) => setCurrentPage(value)}
          valueCurrentPage={currentPage}
          countTodoElem={filterTodos.length}
          countElemPerPage={todosPerPage}>
        </Paginate>
      )}
    </div>
  );
}

export default App;
