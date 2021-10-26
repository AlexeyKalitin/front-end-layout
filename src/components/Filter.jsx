import "../style-modules/filter.module.css";
import React, { useState } from "react";
import arrowup from "../images/arrowup.svg";
import arrowdown from "../images/arrowdown.svg";
import FilterButton from "./filterButton";

function Filter({ todosFilter, setSortStatus }) {
  const [activeFilterSort, setActiveFilterSort] = useState("all");

  const handlerFilterSort = (filterChoose) => {
    setActiveFilterSort(filterChoose);
  };

  const ButtonArrowDown = (
    <button
      onClick={() => {
        setSortStatus("desc",activeFilterSort);
      }}
      className={"filter__arrow-down"}
    >
      <img alt="arrowdown" src={arrowdown} />
    </button>
  );

  const ButtonArrowUp = (
    <button
      onClick={() => {
        setSortStatus("asc",activeFilterSort);
      }}
      className={"filter__arrow-up"}
    >
      <img alt="arrowup" src={arrowup} />
    </button>
  );

  return (
    <span className="filter">
      <span className="filter-buttons">
        <FilterButton
          todosFilter={todosFilter}
          FilterSort={handlerFilterSort}
          activeFilterSort={activeFilterSort}
          value="all"
          sortType="all"
        />
        <FilterButton
          todosFilter={todosFilter}
          FilterSort={handlerFilterSort}
          activeFilterSort={activeFilterSort}
          value={true}
          sortType="done"
        />
        <FilterButton
          todosFilter={todosFilter}
          FilterSort={handlerFilterSort}
          activeFilterSort={activeFilterSort}
          value={false}
          sortType="undone"
        />
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
