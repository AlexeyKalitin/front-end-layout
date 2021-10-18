import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "../style-modules/style.css";
import undone from "../undone.svg";
import trashbin from "../trash.svg";
import done from "../icon.svg";

function Paginate(props) {
  const { list, remove, changeCondition } = props;
  const [postsPerPage] = useState(4);
  const [offset, setOffset] = useState(0);
  const [posts, setAllPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const getPostData = (data) => {
    return data.map((task) => (
      <li key={task.key}>
        {task.isDone === false && (
          <button
            onClick={() => changeCondition(task.key)}
            data-tooltip="Undone"
            className="todo-list__button"
          >
            <img alt="undone" src={undone} className="todo-list__picture" />
          </button>
        )}

        {task.isDone === true && (
          <button data-tooltip="Done" className="todo-list__button">
            <img alt="done" src={done} className="todo-list__picture" />
          </button>
        )}

        <p className="todo-list__text">{task.text}</p>
        <p className="todo-list__date">{task.date}</p>
        <button
          onClick={() => remove(task.key)}
          data-tooltip="Delete"
          className="todo-list__trashbin"
        >
          <img alt="delete" src={trashbin} />
        </button>
      </li>
    ));
  };

  const getFilterTodos = () => {
    const data = list;
    const slice = data.slice(offset - 1, offset - 1 + postsPerPage);
    // For displaying Data
    const postData = getPostData(slice);
    // Using Hooks to set value
    setAllPosts(postData);
    setPageCount(Math.ceil(data.length / postsPerPage));
  };

  const handlePageClick = (event) => {
    setOffset(event.selected + 1);
  };

  useEffect(() => {
    getFilterTodos();
  }, [offset, list]);

  return (
    <div className="main-app">
      {/* Display all the posts */}
      {posts}

      {/* Using React Paginate */}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Paginate;
