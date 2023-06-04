import React, { useContext, useEffect, useState } from "react";
import style from "../style/filter.module.css";
import { josefin } from "../../../utils/fonts";
import cx from "classnames";
import { CardContext } from "../context/context";
import { getPhotos, setSelectedCategories } from "../context/actions";

export const Filter = ({ filter }) => {
  const state = useContext(CardContext);

  const addCategory = () => {
    let categories = state.selectedCategories;
    categories.push(filter);
    setSelectedCategories(categories, state.dispatchCategories);
    getPhotos({ categories: categories }, true, 1, state.dispatchPhotos);
  };

  const removeCategory = () => {
    let categories = state.selectedCategories.filter(
      (category) => category.label !== filter.label
    );
    setSelectedCategories(categories, state.dispatchCategories);
    getPhotos({ categories: categories }, true, 1, state.dispatchPhotos);
  };

  useEffect(() => {
    return () => {};
  }, [filter.isActive]);

  return (
    <button
      className={cx(style.filter, josefin.className, {
        [style.is_active]: filter.isActive,
      })}
      onClick={filter.isActive ? removeCategory : addCategory}
    >
      {filter.label}
    </button>
  );
};
