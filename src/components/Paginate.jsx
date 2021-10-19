import "../style-modules/style.css";
import React, { useState } from "react";

function Paginate({
  setCurrentPage,
  valueCurrentPage,
  countTodoElem,
  countElemPerPage,
}) {
    const arr=[];
  for (let i = 1; i < (countTodoElem / countElemPerPage)+1; i++) {
    arr.push(i)
  }

  return (
    <div className="paginate">
      <button
        className="changer__button"
        onClick={() => {
          if (valueCurrentPage > 0) setCurrentPage(valueCurrentPage - 1);
        }}
      >
        Prev
      </button>

      {arr.slice(0,13).map((ind) => {
          return (
            <button
            className="changer__button"
            onClick={() => {
              setCurrentPage(ind-1);
            }}
          >
            {ind}
          </button>
          );
        })}

      <button
        className="changer__button"
        onClick={() => {
          if (valueCurrentPage < countTodoElem / countElemPerPage - 1)
            setCurrentPage(valueCurrentPage + 1);
        }}
      >
        Next
      </button>
    </div>
  );
}

export default Paginate;
