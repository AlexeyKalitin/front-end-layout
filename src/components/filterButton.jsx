import React from "react";

function FilterButton({
  todosFilter,
  FilterSort,
  activeFilterSort,
  value,
  sortType,
}) {
  return (
    <button
      onClick={() => {
        todosFilter(value);
        FilterSort(sortType);
      }}
      className={
        activeFilterSort === sortType
          ? "filter__button-active"
          : "filter__button"
      }
    >
      {sortType}
    </button>
  );
}
export default FilterButton;
