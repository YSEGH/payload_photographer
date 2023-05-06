import React, { useContext, useEffect } from "react";
import ButtonMore from "../components/Container/CardContainer/components/ButtonMore";
import { DataContext } from "../context/DataContext";
import CardContainer from "../components/Container/CardContainer";
import { getPhotos } from "../context/Actions/DataActions";
import Search from "../components/Container/CardContainer/components/Search";
import Breadcrumb from "../components/Breadcrumb";

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
      <Breadcrumb />
      <CardContainer items={state.photos} />
      <ButtonMore />
    </div>
  );
};

export default Work;
