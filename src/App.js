import "./style-modules/style.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Paginate from "./components/Paginate";
import TodoList from "./components/TodoList";
const axios = require("axios").default;
const apiKey = process.env["REACT_APP_CLIENT_ID"];
const sereverUrl = "https://todo-api-learning.herokuapp.com/v1";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [APIResponseError, setAPIResponseError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [todosPerPage] = useState(5);

  useEffect(() => {
    setIsLoaded(true);
    getItemsAPI("all", "asc");
    setIsLoaded(false);
  }, []);

  const getItemsAPI = (filterBy, sortStatus) => {
    setIsLoaded(true);
    if (filterBy === "all") {
      filterBy = "";
    }
    axios
      .get(
        `${sereverUrl}/tasks/${apiKey}?filterBy=${filterBy}&order=${sortStatus}`
      )
      .finally(setIsLoaded(false))
      .then((response) => {
        setTodos(response.data);
        setIsLoaded(false)
      })
      .catch((error) => {
        showAlertAboutError(error.message);
      });
  };

  const delay = (ms) => {
    setTimeout(() => setAPIResponseError(false), ms);
  };

  const showAlertAboutError = (message) => {
    setAPIResponseError(message);
    delay(5000);
  };

  const handlerRemoveTodo = (elem) => {
    removeItemAPI(elem);
    setTodos(todos.filter((x) => x !== elem));
  };

  const replaceElementField = (elem, field, value) => {
    if (field === "done") {
      elem.done = value;
    }
    if (field === "name") {
      elem.name = value;
    }
  };

  const handlerChangeTodoCondition = (elem) => {
    replaceElementField(elem, "done", !elem.done);
    todos[todos.indexOf(elem)] = elem;
    setTodos(todos.slice(0));
    patchItemAPI(elem);
  };

  const handlerChangeTask = (elem, newText) => {
    replaceElementField(elem, "name", newText.slice(0));
    todos[todos.indexOf(elem)] = elem;
    setTodos(todos.slice(0));
    patchItemAPI(elem);
  };

  const patchItemAPI = (elem) => {
    axios
      .patch(`${sereverUrl}/task/${apiKey}/${elem.uuid}`, elem)
      .catch((error) => {
        showAlertAboutError(error.message);
      });
  };

  const removeItemAPI = (elem) => {
    axios.delete(`${sereverUrl}/task/${apiKey}/${elem.uuid}`).catch((error) => {
      showAlertAboutError(error.message);
    });
  };

  const setItemAPI = (item) => {
    axios
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
    setTodos([...todos, newElem]);
  };

  const handlerSetSortStatus = (sortStatus, filterBy) => {
    getItemsAPI(sortStatus, filterBy);
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
          setSortStatus={(sortStatus, filterBy) =>
            handlerSetSortStatus(sortStatus, filterBy)
          }
        />
      </div>
      {!isLoaded ? (
        <TodoList
          todos={todos.slice(
            currentPage * todosPerPage,
            currentPage * todosPerPage + todosPerPage
          )}
          removeTodo={(uuid) => handlerRemoveTodo(uuid)}
          changeTodoCondition={(elem) => handlerChangeTodoCondition(elem)}
          changeTask={(elem, newText) => handlerChangeTask(elem, newText)}
        ></TodoList>
      ) : (
        animatedLoader
      )}

      {todos.length > 0 && (
        <Paginate
          setCurrentPage={(value) => setCurrentPage(value)}
          currentPage={currentPage}
          countTodoElem={todos.length}
          countElemPerPage={todosPerPage}
        ></Paginate>
      )}
    </div>
  );
}

export default App;
