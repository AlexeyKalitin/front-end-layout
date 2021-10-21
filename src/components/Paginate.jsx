import "../style-modules/Paginate.module.css";
import React from "react";

function Paginate({
  setCurrentPage,
  valueCurrentPage,
  countTodoElem,
  countElemPerPage,
}) {
  const arr = [];
  let filterArr = [];
  const pageCount = countTodoElem / countElemPerPage;
  const countMaxPaginateButtons = 9;

  for (let i = 1; i < pageCount + 1; i++) {
    arr.push(i);
  }

  filterArr = arr.slice(0);

  if (((countTodoElem-1) / countElemPerPage) < valueCurrentPage && valueCurrentPage > 0) {
    console.log(countTodoElem / countElemPerPage);
    setCurrentPage(valueCurrentPage - 1)
  }

  if (pageCount > countMaxPaginateButtons) {
    filterArr = arr
      .slice(0, 2)
      .concat(arr.slice(valueCurrentPage - 1, valueCurrentPage + 2))
      .concat(arr.slice(-3, -1))
      .concat(arr[arr.length - 1])
      .sort((a, b) => a - b);
    filterArr = [...new Set(filterArr)];
  }

  const clickHandler = () => {
    if (pageCount - 1 > valueCurrentPage) setCurrentPage(valueCurrentPage + 1);
  };

  return (
    <div className="paginate">
      <div className="paginate__button">
        <button
          className="paginate__button"
          onClick={() => {
            if (valueCurrentPage > 0) setCurrentPage(valueCurrentPage - 1);
          }}
        >
          Prev
        </button>
      </div>
      {filterArr.map((ind) => {
        if (arr.length > 1) {
          return (
            <div key={ind} className="paginate__button">
              <button
                className={
                  ind - 1 === valueCurrentPage
                    ? "paginate__button paginate__button-active"
                    : "paginate__button"
                }
                onClick={() => {
                  setCurrentPage(ind - 1);
                }}
              >
                {ind}
              </button>
            </div>
          );
        } else return <div key={ind}></div>;
      })}

      <div className="paginate__button">
        <button className="paginate__button" onClick={clickHandler}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginate;
