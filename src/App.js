import "./style-modules/style.css";
import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Paginate from "./components/Paginate";
import TodoList from "./components/TodoList";
import { Pagination } from "antd";

import "antd/dist/antd.css";
const axios = require("axios").default;
const userID = process.env["REACT_APP_CLIENT_ID"];
const sereverUrl = process.env["REACT_APP_SERVER_URL"];

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [APIResponseError, setAPIResponseError] = useState(false);
  const [todos, setTodos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(5);

  useEffect(() => {
    setIsLoaded(true);
    getItemsAPI("", "asc");
    setIsLoaded(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    showAlertAboutError(APIResponseError);
    setTimeout(() => setAPIResponseError(false), 4000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [APIResponseError]);

  useEffect(() => {
    if (
      Math.ceil(todos.length / todosPerPage) < currentPage &&
      currentPage > 1
    ) {
      setCurrentPage((prev) => prev - 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos.length]);

  const queryString = (First, Second) =>
    new URLSearchParams({ filterBy: First, order: Second }).toString();

  const getItemsAPI = (filterBy, sortStatus) => {
    setIsLoaded(true);
    axios
      .get(`${sereverUrl}/tasks/${userID}?${queryString(filterBy, sortStatus)}`)
      .then((response) => {
        setTodos(response.data);
        setIsLoaded(false);
      })
      .catch((error) => {
        setAPIResponseError(error.response.data.message);
      })
      .finally(setIsLoaded(false));
  };

  const showAlertAboutError = () => {
    setAPIResponseError(APIResponseError);
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
      .patch(`${sereverUrl}/task/${userID}/${elem.uuid}`, elem)
      .catch((error) => {
        setAPIResponseError(error.response.data.message);
      });
  };

  const removeItemAPI = (elem) => {
    axios.delete(`${sereverUrl}/task/${userID}/${elem.uuid}`).catch((error) => {
      setAPIResponseError(error.response.data.message);
    });
  };

  const setItemAPI = (item) => {
    axios
      .post(`${sereverUrl}/task/${userID}`, item)
      .then((response) => {
        if (!Object.keys(response.data).includes("uuid")) {
          setAPIResponseError("Object without uuid");
        } else item.uuid = response.data.uuid;
      })
      .catch((error) => {
        setAPIResponseError(error.response.data.message);
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
  const changeCurrentPage = (page, pageSize) => {
    setCurrentPage(page);
  };
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
            (currentPage - 1) * todosPerPage,
            currentPage * todosPerPage
          )}
          removeTodo={(uuid) => handlerRemoveTodo(uuid)}
          changeTodoCondition={(elem) => handlerChangeTodoCondition(elem)}
          changeTask={(elem, newText) => handlerChangeTask(elem, newText)}
        ></TodoList>
      ) : (
        animatedLoader
      )}
      <Pagination
      size="default"
        className="ant-pagination paginate"
        current={currentPage}
        total={todos.length}
        hideOnSinglePage
        pageSize={todosPerPage}
        onChange={(page, pageSize) => changeCurrentPage(page, pageSize)}
      />
      
    </div>
  );
}

export default App;
