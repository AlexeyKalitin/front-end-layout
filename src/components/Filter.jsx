import "../style-modules/style.css";
import React, { useState, useEffect } from "react";
import arrowup from "../arrowup.svg";
import arrowdown from "../arrowdown.svg";
function Filter(props) {
  return (
    <span className="filter">
      <span className="filter-buttons">
        <button
          onClick={() => props.listFilter("all")}
          className="filter__button-all"
        >
          all
        </button>
        <button
          onClick={() => props.listFilter(true)}
          className="filter__button-done"
        >
          done
        </button>
        <button
          onClick={() => props.listFilter(false)}
          className="filter__button-undone"
        >
          undone
        </button>
      </span>
      <span className="filter-sort">
        <p style={{ marginRight: 11 }}>Sort by Date</p>
        <button
          onClick={() => props.setSortStatus("down")}
          className="filter__arrow-down"
        >
          <img alt="arrowdown" src={arrowdown} />
        </button>
        <button
          onClick={() => props.setSortStatus("up")}
          className="filter__arrow-up"
        >
          <img alt="arrowup" src={arrowup} />
        </button>
      </span>
    </span>
  );
}
export default Filter;
