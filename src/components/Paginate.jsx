import "../style-modules/style.css";
import React from "react";

function Paginate({
  setCurrentPage,
  valueCurrentPage,
  countTodoElem,
  countElemPerPage,
}) {
  const arr = [];
  for (let i = 1; i < countTodoElem / countElemPerPage + 1; i++) {
    arr.push(i);
  }

  const clickHandler = () => {
    if (valueCurrentPage < countTodoElem / countElemPerPage - 1)
      setCurrentPage(valueCurrentPage + 1);
  }

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
      {arr.map((ind) => {
        if (arr.length>1){
        return (
          <div key={ind} className="paginate__button">
            {ind - 1 === valueCurrentPage && (
              <button
                className="paginate__button paginate__button-active"
                onClick={() => {
                  setCurrentPage(ind - 1);
                }}
              >
                {ind}
              </button>
            )}

            {ind - 1 !== valueCurrentPage && (
              <button
                className="paginate__button"
                onClick={() => {
                  setCurrentPage(ind - 1);
                }}
              >
                {ind}
              </button>
            )}
          </div>
        );}
      })}
      <div className="paginate__button">
        <button
          className="paginate__button"
          onClick={() => clickHandler}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Paginate;
