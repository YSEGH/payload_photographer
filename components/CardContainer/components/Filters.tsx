import React, { useContext, useEffect } from "react";
import { CardContext } from "../context/context";
import { Filter } from "./Filter";
import style from "../style/filters.module.css";
import { getCategories } from "../context/actions";

export const Filters = () => {
  const state = useContext(CardContext);

  useEffect(() => {
    console.log(state.categories.length);

    if (state.categories.length === 0) {
      getCategories(state.dispatchCategories);
    }
    return () => {};
  }, []);

  useEffect(() => {
    return () => {};
  }, [state.selectedCategories.length]);

  return (
    <div className={style.filters__container}>
      {state.categories.map((filter, i) => (
        <Filter key={filter.title + i.toString()} filter={filter} />
      ))}
    </div>
  );
};
