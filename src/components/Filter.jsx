import "../style-modules/style.css";
import React, {useState} from "react";
import arrowup from "../arrowup.svg";
import arrowdown from "../arrowdown.svg";
function Filter({ todosFilter, setSortStatus }) {
  const [activeFilter, setActiveFilter] = useState("all")
  const handlerFilterSelection = filterName => {
    setActiveFilter(filterName);
  }
  return (
    <span className="filter">
      <span className="filter-buttons">
        {(activeFilter !== "all") ? <button
          onClick={() => { todosFilter("all"); handlerFilterSelection("all") }}
          className="filter__button"
        >
          all
        </button>
          :
          <button
            onClick={() => { todosFilter("all"); handlerFilterSelection("all") }}
            className="filter__button-active"
          >
            all
        </button>}

        {(activeFilter !== "done") ? <button
          onClick={() => { todosFilter(true); handlerFilterSelection("done") }}
          className="filter__button"
        >
          done
        </button>
          :
          <button
          onClick={() => { todosFilter(true); handlerFilterSelection("done") }}
          className="filter__button-active"
        >
          done
        </button>}

        {(activeFilter !== "undone") ?  <button
          onClick={() => { todosFilter(false); handlerFilterSelection("undone") }}
          className="filter__button"
        >
          undone
        </button>
          :
          <button
          onClick={() => { todosFilter(false); handlerFilterSelection("undone") }}
          className="filter__button-active"
        >
          undone
        </button>}
       
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
          onClick={() => setSortStatus("up")}
          className="filter__arrow-up"
        >
          <img alt="arrowup" src={arrowup} />
        </button>
      </span>
    </span>
  );
}
export default Filter;
