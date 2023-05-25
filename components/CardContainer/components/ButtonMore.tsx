import React, { useContext, useEffect } from "react";
import Loader from "../../Loader";
import styles from "../style/buttonMore.module.css";
import cx from "classnames";
import { exo } from "../../../utils/fonts";
import { CardContext } from "../context/context";
import { getPhotos } from "../context/actions";

const ButtonMore: React.FC = () => {
  const state = useContext(CardContext);

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
    <div className={styles.button_more__container}>
      {!state.hasNextPage ? (
        <p className={cx(styles.button_more__text, exo.className)}>
          Fin des résultats
        </p>
      ) : (
        <button
          className={cx(styles.button_more__button, exo.className)}
          onClick={onClickHandler}
          disabled={state.loadingGetPhotos}
        >
          {state.loadingGetPhotos ? <Loader fill="#FFFFFF" /> : "Voir plus"}
        </button>
      )}
    </div>
  );
};

export default ButtonMore;
