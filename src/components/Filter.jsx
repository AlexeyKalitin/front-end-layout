import "../style-modules/style.css";
import React from "react";
import arrowup from "../arrowup.svg";
import arrowdown from "../arrowdown.svg";
function Filter({todosFilter,setSortStatus}) {
  return (
    <span className="filter">
      <span className="filter-buttons">
        <button
          onClick={() => todosFilter("all")}
          className="filter__button-all"
        >
          all
        </button>
        <button
          onClick={() => todosFilter(true)}
          className="filter__button-done"
        >
          done
        </button>
        <button
          onClick={() => todosFilter(false)}
          className="filter__button-undone"
        >
          undone
        </button>
      </span>
      <span className="filter-sort">
        <p style={{ marginRight: 11 }}>Sort by Date</p>
        <button
          onClick={() => setSortStatus("down")}
          className="filter__arrow-down"
        >
          <img alt="arrowdown" src={arrowdown} />
        </button>
        <button
          onClick={() =>setSortStatus("up")}
          className="filter__arrow-up"
        >
          <img alt="arrowup" src={arrowup} />
        </button>
      </span>
    </span>
  );
}
export default Filter;
