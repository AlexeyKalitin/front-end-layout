import arrowup from "./arrowup.svg";
import arrowdown from "./arrowdown.svg";
import "./style-modules/style.css"
import React, { useEffect, useState } from 'react';
import TodoList from "./components/TodoList";
import Changer from "./components/UI/Changer";

function App() {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");
  const [elemCount, setElemCount] = useState(Number(0));
  const [filterList, setFilterList] = useState([]);
  const [sortStatus, setSortStatus] = useState("up");
  const currentDate = new Date();

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
      const newArr=filterList.sort((a,b) => a.key-b.key);
      Object.assign(newArr2,newArr)
      setFilterList(newArr2) 
    }
    if(sortStatus === "down"){
      const newArr2 = []
      const newArr=filterList.sort((a,b) => b.key-a.key);
      Object.assign(newArr2,newArr)
      setFilterList(newArr2) 
    }
  },[sortStatus])

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const removeItem = id => {
    setList(list.filter(x => (x.key !== id)))
    setFilterList(list.filter(x => (x.key !== id)))
  }

  const changeCondition = el => {
    const newData = list.map(item => {
      if (item.key === el) {
        return Object.assign({}, item, { isDone: true })
      }
      return item
    })
    const newSortedData = filterList.map(item => {
      if (item.key === el) {
        return Object.assign({}, item, { isDone: true })
      }
      return item
    })
    setList(newData)
    setFilterList(newSortedData)
  }

  return (
    <div className="conteiner">
      <div>
        <div className="todo">
          <h1>ToDo</h1>
          <div className="input">
            <input
              onKeyDown={(ev) => {
                if (ev.keyCode == 13) {
                  const newElem = {
                    key: currentDate.getTime(),
                    text: value,
                    date: `${currentDate.getDay()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`,
                    isDone: false
                  }
                  setList([...list, newElem])
                  setFilterList([...list, newElem])
                  setValue("")
                }
              }
              }
              value={value}
              onChange={handleChange}
              placeholder="Type task"
              autoFocus
              name="stateAttrName"
              className="todo__text"
              type="text"/>
          </div>
        </div>
        <span className="filter">
          <span className="filter-buttons">
            <button
            onClick={() => listFilter("all")} 
            className="filter__button-all">all</button>
            <button 
            onClick={() => listFilter(true)} 
            className="filter__button-done">done</button>
            <button 
            onClick={() => listFilter(false)} 
            className="filter__button-undone">undone</button>
          </span>
          <span className="filter-sort">
            <p style={{ marginRight: 11 }}>Sort by Date</p>
            <button onClick={() => setSortStatus("down")} className="filter__arrow-down">
              <img alt="arrowdown" src={arrowdown} />
            </button>
            <button onClick={() => setSortStatus("up")} className="filter__arrow-up">
              <img alt="arrowup" src={arrowup} />
            </button>
          </span>
        </span>
        <div className="todo-main">
          <TodoList count={elemCount} list={filterList} remove={removeItem} changeCondition={changeCondition} />
          
        </div>
      </div>
      <Changer/>
      
    </div>
  );
}

export default App;
