import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import Loader from "../Loader";
import { getPhotos } from "../../context/Actions/DataActions";

const ButtonMore: React.FC = () => {
  const state = useContext(DataContext);

  useEffect(() => {}, [state.hasNextPage]);

  const onClickHandler = () => {
    getPhotos(
      { categories: state.selectedCategories },
      false,
      state.page,
      state.dispatchPhotos
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
