import "../style-modules/Paginate.module.css";
import React from "react";

function Paginate({
  setCurrentPage,
  currentPage,
  countTodoElem,
  countElemPerPage,
}) {
  const arr = [];
  let filterArr = [];
  const pageCount = countTodoElem / countElemPerPage;
  const maxPaginateButtons = 8;

  for (let i = 1; i < pageCount + 1; i++) {
    arr.push(i);
  }
  filterArr = arr.slice(0);

  if ((countTodoElem - 1) / countElemPerPage < currentPage && currentPage > 0) {
    setCurrentPage(currentPage - 1);
  }

  if (pageCount > maxPaginateButtons) {
    filterArr = arr
      .slice(0, 2)
      .concat(arr.slice(currentPage - 1, currentPage + 2))
      .concat(arr.slice(-3, -1))
      .concat(arr[arr.length - 1])
      .sort((a, b) => a - b);
    filterArr = [...new Set(filterArr)];
  }

  const clickHandler = () => {
    if (pageCount - 1 > currentPage) setCurrentPage(currentPage + 1);
  };

  const setPrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const changeCurrentPage = (ind) => {
    setCurrentPage(ind - 1);
  };

  const todosShown = filterArr.map((ind) => {
    if (arr.length > 1) {
      return (
        <div key={ind} className="paginate__button">
          <button
            className={
              ind - 1 === currentPage
                ? "paginate__button paginate__button-active"
                : "paginate__button"
            }
            onClick={() => changeCurrentPage(ind)}
          >
            {ind}
          </button>
        </div>
      );
    } else return <div key={ind}></div>;
  });

  return (
    <div className="paginate">
      <div className="paginate__button">
        <button className="paginate__button" onClick={setPrevPage}>
          Prev
        </button>
      </div>
      {todosShown}
      <div className="paginate__button">
        <button className="paginate__button" onClick={clickHandler}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginate;
