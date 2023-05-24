import React, { useState, useEffect } from "react";
import { BsArrowRight, BsSearch, NsArrowRight } from "react-icons/bs";

import Style from "./SearchBar.module.css";

const SearchBar = ({ onHandleSearch, onClearSearch }) => {
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  useEffect(() => {
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    return () => clearTimeout(timer);
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      // console.log(search);
      onHandleSearch(search);
    } else {
      onClearSearch();
    }
  }, []);

  console.log(search, searchItem);
  return (
    <div className={Style.searchBar}>
      <div className={Style.searchBar_box}>
        <BsSearch className={Style.searchBar_box_icon} />
        <input
          type="text"
          placeholder="Type your keyword.."
          onChange={(e) => setSearchItem(e.target.value)}
          value={searchItem}
        />
        <BsArrowRight className={Style.searchBar_box_icon} />
      </div>
    </div>
  );
};

export default SearchBar;
