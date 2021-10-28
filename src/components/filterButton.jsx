import React from "react";

function FilterButton({ text, setActiveFilterSort, activeFilterSort }) {
  return (
    <button
      onClick={() => {
        setActiveFilterSort(text);
      }}
      className={
        activeFilterSort === text ? "filter__button-active" : "filter__button"
      }
    >
      {text}
    </button>
  );
}
export default FilterButton;
