import "./style-modules/style.css"
import React, { useEffect, useState } from 'react';
import Input from "./components/Input"
import Filter from "./components/Filter"
import Paginate from "./components/Paginate"
import TodoList from "./components/TodoList";
function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [sortStatus, setSortStatus] = useState("up");
  const [currentPage, setCurrentPage] = useState(0);
  const [todosPerPage] = useState(5);

  console.log("render")

  function listFilter(status) {
    if (status === "all") {
      setFilterList(list)
    } else {
      setFilterList(list.filter(item => item.isDone === status));
    }
    setCurrentPage(0)
  }

  const removeItem = id => {
    setList(list.filter(x => (x.key !== id)))
    setFilterList(list.filter(x => (x.key !== id)))
  }

  const changeCondition = elem => {
    const upgradedElem = list.map(item => {
      if (item.key === elem) {
        return Object.assign({}, item, { isDone: true })
      }
      return item
    })
    setList(upgradedElem)
    setFilterList(upgradedElem)
  }


  const handlerChangeTask = (elem,newText) => {
    const upgradedElem = list.map(item => {
      if (item.key === elem) {
        return Object.assign({}, item, { text: newText })
      }
      return item
    })
    console.log("------------")
    console.log(upgradedElem)
    setList(upgradedElem)
    setFilterList(upgradedElem)

  }

  const handlerNewElemSetter = newElem => {
    setList([...list, newElem])
    setFilterList([...list, newElem])
  }

  const handlerSetSortStatus = sortStatus => {
    const newMass = []

    let sortedTodos = filterList.sort((a, b) => a.key - b.key)
    if (sortStatus === "down") {
      sortedTodos = filterList.sort((a, b) => b.key - a.key)
    }

    Object.assign(newMass, sortedTodos)
    setFilterList(newMass);
  }

  return (
    <div className="conteiner">
      <div>
        <div className="todo">
          <h1>ToDo</h1>
          <Input newElemSetter={newElem => handlerNewElemSetter(newElem)}></Input>
        </div>
        <Filter listFilter={(status) => listFilter(status)} setSortStatus={(sortStatus) => handlerSetSortStatus(sortStatus)} />
        <div className="todo-main">
        </div>
      </div>
      <TodoList todos={filterList.slice(currentPage * todosPerPage, currentPage * todosPerPage + todosPerPage)} removeItem={(id) => removeItem(id)} changeCondition={(elem)  => changeCondition(elem)} changeTask={(elem, newText)=>handlerChangeTask(elem,newText)} ></TodoList>
      {list.length>0 && (
        <Paginate setCurrentPage={(value) => setCurrentPage(value)} valueCurrentPage={currentPage} countTodoElem={filterList.length} countElemPerPage={todosPerPage}></Paginate>
      )} 
    </div>
  );

}

export default App;
