import React, { useContext, useEffect } from "react";
import ButtonMore from "../components/Items/ButtonMore";
import { DataContext } from "../context/DataContext";
import CardContainer from "../components/Container/CardContainer";
import { getPhotos } from "../context/Actions/DataActions";
import Search from "../components/Container/CardContainer/components/Search";

const Work: React.FC = () => {
  const state = useContext(DataContext);

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
    <div className="page_work__container">
      <Search />
      <CardContainer items={state.photos} />
      <ButtonMore />
    </div>
  );
};

export default Work;
