import "../style-modules/filter.module.css";
import React, { useState } from "react";
import arrowup from "../arrowup.svg";
import arrowdown from "../arrowdown.svg";
function Filter({ todosFilter, setSortStatus }) {
  const [activeFilterSort, setActiveFilterSort] = useState("all");

  const handlerFilterSort = (filterChoose) => {
    setActiveFilterSort(filterChoose);
  };

  const ButtonArrowDown = (
    <button
      onClick={() => {
        setSortStatus("down");
      }}
      className={"filter__arrow-down"}
    >
      <img alt="arrowdown" src={arrowdown} />
    </button>
  );

  const ButtonArrowUp = (
    <button
      onClick={() => {
        setSortStatus("up");
      }}
      className={"filter__arrow-up"}
    >
      <img alt="arrowup" src={arrowup} />
    </button>
  );

  return (
    <span className="filter">
      <span className="filter-buttons">
        <button
          onClick={() => {
            todosFilter("all");
            handlerFilterSort("all");
          }}
          className={
            activeFilterSort === "all"
              ? "filter__button-active"
              : "filter__button"
          }
        >
          all
        </button>
        <button
          onClick={() => {
            todosFilter(true);
            handlerFilterSort("done");
          }}
          className={
            activeFilterSort === "done"
              ? "filter__button-active"
              : "filter__button"
          }
        >
          done
        </button>

        <button
          onClick={() => {
            todosFilter(false);
            handlerFilterSort("undone");
          }}
          className={
            activeFilterSort === "undone"
              ? "filter__button-active"
              : "filter__button"
          }
        >
          undone
        </button>
      </span>
      <span className="filter-sort">
        <p className="sortBy-text">Sort by Date</p>
        {ButtonArrowDown}
        {ButtonArrowUp}
      </span>
    </span>
  );
}
export default Filter;
