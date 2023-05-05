import React, { useContext, useEffect } from "react";
import ButtonMore from "../components/Items/ButtonMore";
import { DataContext } from "../context/DataContext";
import CardContainer from "../components/Container/CardContainer";

const Work: React.FC = () => {
  const { state, actions } = useContext(DataContext);

  useEffect(() => {
    if (state.photos.length === 0) {
      actions.getPhotos(
        { categories: state.selectedCategories },
        false,
        state.page
      );
    }
  }, []);

  return (
    <div className="page_work__container">
      <CardContainer items={state.photos} />
      <ButtonMore />
    </div>
  );
};

export default Work;
