import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import Loader from "../Layout/Loader";

const ButtonMore: React.FC = () => {
  const { actions, state } = useContext(DataContext);

  useEffect(() => {}, [state.hasNextPage]);

  const onClickHandler = () => {
    console.log({ categories: state.selectedCategories }, false, state.page);

    actions.getPhotos(
      { categories: state.selectedCategories },
      false,
      state.page
    );
  };

  return (
    <div className="button_more__container">
      {!state.hasNextPage ? (
        <p className="button_more__text">Fin des résultats</p>
      ) : (
        <button className="button_more__button" onClick={onClickHandler}>
          {state.loadingGetPhotos ? <Loader fill="#000000" /> : "Voir plus"}
        </button>
      )}
    </div>
  );
};

export default ButtonMore;
