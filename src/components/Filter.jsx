import "../style-modules/filter.module.css";
import React, { useState,useEffect } from "react";
import arrowup from "../images/arrowup.svg";
import arrowdown from "../images/arrowdown.svg";
import FilterButton from "./filterButton";

function Filter({ setSortStatus }) {
  const [activeFilterSort, setActiveFilterSort] = useState("all");
  const [activeSortByDate, setActiveSortByDate] = useState("asc");
  
  useEffect(() => {
    setSortStatus(activeFilterSort, activeSortByDate);
  }, [activeFilterSort,activeSortByDate]);

  const ButtonArrowDown = (
    <button
      onClick={() => {
        setActiveSortByDate("desc");
      }}
      className={"filter__arrow-down"}
    >
      <img alt="arrowdown" src={arrowdown} />
    </button>
  );

  const ButtonArrowUp = (
    <button
      onClick={() => {
        setActiveSortByDate("asc");
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
          text="all"
          setActiveFilterSort={setActiveFilterSort}
          activeFilterSort={activeFilterSort}
        ></FilterButton>
        <FilterButton
          text="done"
          setActiveFilterSort={setActiveFilterSort}
          activeFilterSort={activeFilterSort}
        ></FilterButton>
        <FilterButton
          text="undone"
          setActiveFilterSort={setActiveFilterSort}
          activeFilterSort={activeFilterSort}
        ></FilterButton>
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
