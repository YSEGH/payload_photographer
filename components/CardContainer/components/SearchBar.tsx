import React from "react";
import { Filters } from "./Filters";
import Search from "./Search";
import style from "../style/searchbar.module.css";

const SearchBar = () => {
  return (
    <div className={style.searchBar}>
      <Search />
      <Filters />
    </div>
  );
};

export default SearchBar;
