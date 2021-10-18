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

  function listFilter(status) {
    if (status === "all") {
      setFilterList(list)
    } else {
      const newList = list.filter(item => item.isDone === status)
      setFilterList(newList);
    }
  }

  useEffect(() => {
    if (sortStatus === "up") {
      const newArr2 = []
      const newArr = filterList.sort((a, b) => a.key - b.key);
      Object.assign(newArr2, newArr)
      setFilterList(newArr2)
    }
    if (sortStatus === "down") {
      const newArr2 = []
      const newArr = filterList.sort((a, b) => b.key - a.key);
      Object.assign(newArr2, newArr)
      setFilterList(newArr2)
    }
  }, [sortStatus])



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
    console.log([...upgradedElem]);
    setFilterList(upgradedElem)

  }


  const handlerNewElemSetter = newElem => {
    setList([...list, newElem])
    setFilterList([...list, newElem])
  }

  const handlerSetSortStatus = sortStatus => {
    const newMass = []

    let sortedTodos = list.sort((a, b) => a.key - b.key)
    if (sortStatus === "down") {
      sortedTodos = list.sort((a, b) => b.key - a.key)
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
      <TodoList todos={filterList} removeItem={(id) => removeItem(id)} changeCondition={(elem) => changeCondition(elem)}></TodoList>
    </div>
  );

}

export default App;
