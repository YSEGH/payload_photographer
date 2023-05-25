import React, { useContext, useEffect } from "react";
import global from "../../css/global.module.css";
import cx from "classnames";
import CardContainer from "../../components/CardContainer";
import { CardContext } from "../../components/CardContainer/context/context";
import { getPhotos } from "../../components/CardContainer/context/actions";

export type Props = {
  blockType: "galleryBlock";
  blockName?: string;
};

export const Component: React.FC<Props> = (props) => {
  const state = useContext(CardContext);

  useEffect(() => {
    if (state.photos.length === 0) {
      getPhotos(
        { categories: state.selectedCategories },
        false,
        state.page,
        state.dispatchPhotos
      );
    }
  }, []);

  return (
    <div className={cx(global.container__large)}>
      <CardContainer items={state.photos} />
    </div>
  );
};
