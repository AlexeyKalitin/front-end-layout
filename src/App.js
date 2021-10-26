import "./style-modules/style.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Paginate from "./components/Paginate";
import TodoList from "./components/TodoList";
const axios = require("axios").default;
const apiKey = process.env["REACT_APP_CLIENT_ID"];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [APIResponseError, setAPIResponseError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [filterTodos, setFilterTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [todosPerPage] = useState(5);
  const sereverUrl = "https://todo-api-learning.herokuapp.com/v1";

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoaded(true);
      console.log(`${sereverUrl}/tasks/${apiKey}`);
      console.log(apiKey);
      await axios
        .get(`${sereverUrl}/tasks/${apiKey}`)
        .then((response) => {
          setTodos(response.data);
          setFilterTodos(response.data);
          setIsLoaded(false);
        })
        .catch((error) => {
          showAlertAboutError(error.message);
        });
    };
    fetchTodos();
  }, []);

  const showAlertAboutError = (message) => {
    setAPIResponseError(message);
    setTimeout(() => setAPIResponseError(false), 5000);
  };

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
      filterTodos.filter((x) => x.uuid !== elem)
    );
    removeItemAPI(elem);
  };

  const replaceElementField = (elem, field, value) => {
    if (field === "isDone") {
      elem.done = value;
    }
    if (field === "name") {
      elem.name = value;
    }
  };

  const handlerChangeTodoCondition = (elem) => {
    replaceElementField(elem, "isDone", !elem.done);
    todos[todos.indexOf(elem)] = elem;
    filterTodos[todos.indexOf(elem)] = elem;
    SetStates(todos.slice(0), filterTodos.slice(0));
    patchItemAPI(elem);
  };

  const handlerChangeTask = (elem, newText) => {
    replaceElementField(elem, "name", newText.slice(0));
    todos[todos.indexOf(elem)] = elem;
    filterTodos[filterTodos.indexOf(elem)] = elem;
    SetStates(todos.slice(0), filterTodos.slice(0));
    patchItemAPI(elem);
  };

  const patchItemAPI = async (elem) => {
    await axios
      .patch(`${sereverUrl}/task/${apiKey}/${elem.uuid}`, elem)
      .catch((error) => {
        showAlertAboutError(error.message);
      });
  };

  const removeItemAPI = async (id) => {
    await axios.delete(`${sereverUrl}/task/${apiKey}/${id}`).catch((error) => {
      showAlertAboutError(error.message);
    });
  };

  const setItemAPI = async (item) => {
    await axios
      .post(`${sereverUrl}/task/${apiKey}`, item)
      .then((response) => {
        item.uuid = response.data.uuid;
      })
      .catch((error) => {
        showAlertAboutError(error.message);
      });
  };

  const handlerNewElemSetter = (newElem) => {
    setItemAPI(newElem);
    SetStates([...todos, newElem], [...filterTodos, newElem]);
  };

  const handlerSetSortStatus = async (sortStatus, filterBy) => {
    if (filterBy === "all") {
      filterBy = "";
    }
    await axios
      .get(
        `${sereverUrl}/tasks/${apiKey}?filterBy=${filterBy}&order=${sortStatus}`
      )
      .then((response) => {
        setFilterTodos(response.data);
      })
      .catch((error) => {
        showAlertAboutError(error.message);
      });
  };

  const IsUniqueName = (value) => {
    return todos.every((x) => x.name !== value);
  };

  const showErrorWindow = APIResponseError !== false && (
    <div className="alert-about-error">
      <p>{APIResponseError}</p>
    </div>
  );

  const animatedLoader = (
    <div className="animated-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  return (
    <div className="conteiner">
      {showErrorWindow}

      <div>
        <div className="todo">
          <h1>ToDo</h1>
          <Input
            newElemSetter={(newElem) => handlerNewElemSetter(newElem)}
            nonExistYet={(value) => IsUniqueName(value)}
          />
        </div>

        <Filter
          todosFilter={(status) => todosFilter(status)}
          setSortStatus={(sortStatus, filterBy) =>
            handlerSetSortStatus(sortStatus, filterBy)
          }
        />
      </div>
      {!isLoaded ? (
        <TodoList
          todos={filterTodos.slice(
            currentPage * todosPerPage,
            currentPage * todosPerPage + todosPerPage
          )}
          removeTodo={(id) => handlerRemoveTodo(id)}
          changeTodoCondition={(elem) => handlerChangeTodoCondition(elem)}
          changeTask={(elem, newText) => handlerChangeTask(elem, newText)}
        ></TodoList>
      ) : (
        animatedLoader
      )}

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
