import "./style-modules/style.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Paginate from "./components/Paginate";
import TodoList from "./components/TodoList";
const axios = require('axios').default

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [APIResponseError, setAPIResponseError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [todosPerPage] = useState(5);
  const sereverUrl="https://todo-api-learning.herokuapp.com/v1"

  useEffect(() => {
    const fetchTodos = async() => {
      await axios.get(`${sereverUrl}/tasks/${process.env.REACT_APP_CLIENT_ID}`)
        .then(response => {
          console.log(response.data)
         setTodos(response.data)
         setFilterTodos(response.data)  
        })
        .catch(error => {
          // handle error
          console.log(error.message)
          //setAPIResponseError(error.response);
        });
    }
    fetchTodos();
   
  }, [])

  function todosFilter(status) {
    if (status === "all") {
      setFilterTodos(todos);
    } else {
      setFilterTodos(todos.filter((item) => item.done === status));
    }
    setCurrentPage(0);
  }

  const SetStates = async (first, second) => {
    setTodos(first);
    setFilterTodos(second);    
  };

  const handlerRemoveTodo = (elem) => {
    SetStates(
      todos.filter((x) => x.uuid !== elem),
      filterTodos.filter((x) => x.uuid !== elem),
    );
    removeItemAPI(elem)
  };

  const replaceElementField = (elem, field, value) => {
    if (field === "isDone") {
      elem.done = value
    }
    if (field === "name") {
      elem.name = value
    }
  }

  const handlerChangeTodoCondition = (elem) => {
    const todosIndex = todos.indexOf(elem)
    const filterTodosIndex = filterTodos.indexOf(elem)
    replaceElementField(elem, "isDone", !elem.done)
    todos[todosIndex] = elem
    filterTodos[filterTodosIndex] = elem
    SetStates(
      todos.slice(0),
      filterTodos.slice(0),
    )
    patchItemAPI(elem)
  };

  const patchItemAPI = async (elem) =>{
    await axios.patch(`${sereverUrl}/task/${process.env.REACT_APP_CLIENT_ID}/${elem.uuid}`,elem)
    .then(response => {
      console.log(response)
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
      //console.log(error.message)
    });
  }


  const handlerChangeTask = (elem, newText) => {
    const todosIndex = todos.indexOf(elem)
    const filterTodosIndex = filterTodos.indexOf(elem)
    replaceElementField(elem, "name", newText.slice(0))
    todos[todosIndex] = elem
    filterTodos[filterTodosIndex] = elem
    SetStates(
      todos.slice(0),
      filterTodos.slice(0),
      JSON.stringify(todos.slice(0))
    )
  };

const removeItemAPI = async (id) =>{
  await axios.delete(`${sereverUrl}/task/${process.env.REACT_APP_CLIENT_ID}/${id}`)
  .then(response => {
    console.log(response)
    console.log(response.data)
  })
  .catch(error => {
    console.log(error)
    //console.log(error.message)
  });
}

const setItemAPI = async(item) => {
  await axios.post(`${sereverUrl}/task/${process.env.REACT_APP_CLIENT_ID}`,item)
    .then(response => {
      console.log(response)
      console.log(response.data.uuid)
      item.uuid = response.data.uuid
    })
    .catch(error => {
      console.log(error)
      //console.log(error.message)
    });
  }

  const handlerNewElemSetter = (newElem) => {
    setItemAPI(newElem)
    SetStates(
      [...todos, newElem],
      [...filterTodos, newElem]
    )
    console.log(filterTodos)
  };

  const handlerSetSortStatus = (sortStatus) => {
    let sortedTodos = filterTodos.sort((a, b) => a.key - b.key).slice(0);
    if (sortStatus === "down") {
      sortedTodos = filterTodos.sort((a, b) => b.key - a.key).slice(0);
    }
    setFilterTodos(sortedTodos);
  };
  const IsUniqueName = (value) => {
    return todos.every(x => x.name !== value)
  };

  return (
    <div className="conteiner">
      <div>
        <div className="todo">
          <h1>ToDo</h1>
          <Input newElemSetter={(newElem) => handlerNewElemSetter(newElem)} nonExistYet={(value) => IsUniqueName(value)}
          />
        </div>

        <Filter
          todosFilter={(status) => todosFilter(status)}
          setSortStatus={(sortStatus) => handlerSetSortStatus(sortStatus)}
        />
      </div>

      <TodoList
        todos={filterTodos.slice(
          currentPage * todosPerPage,
          currentPage * todosPerPage + todosPerPage
        )}
        removeTodo={(id) => handlerRemoveTodo(id)}
        changeTodoCondition={(elem) => handlerChangeTodoCondition(elem)}
        changeTask={(elem, newText) => handlerChangeTask(elem, newText)}
      ></TodoList>

      {filterTodos.length > 0 && (
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
