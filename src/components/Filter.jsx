import "../style-modules/filter.module.css";
import React, { useState, useEffect } from "react";
import { Button, Radio } from "antd";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

function Filter({ setSortStatus }) {
  const [activeFilterSort, setActiveFilterSort] = useState("");
  const [activeSortByDate, setActiveSortByDate] = useState("asc");

  useEffect(() => {
    setSortStatus(activeFilterSort, activeSortByDate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilterSort, activeSortByDate]);

  const buttonOptions = [
    { label: "all", value: "" },
    { label: "done", value: "done" },
    { label: "undone", value: "undone" },
  ];
  const changeFilterSort = (e) => {
    setActiveFilterSort(e.target.value);
  };
  return (
    <span className="filter">
      <Radio.Group
        size="large"
        options={buttonOptions}
        onChange={changeFilterSort}
        value={activeFilterSort}
        optionType="button"
        buttonStyle="solid"
      />
      <span className="filter-sort">
        <p className="sortBy-text">Sort by Date</p>
        <Button
          onClick={() => {
            setActiveSortByDate("desc");
          }}
          icon={<DownOutlined />}
        ></Button>

        <Button
          onClick={() => {
            setActiveSortByDate("asc");
          }}
          icon={<UpOutlined />}
        ></Button>
      </span>
    </span>
  );
}
export default Filter;
