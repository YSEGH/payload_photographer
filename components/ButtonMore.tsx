import React, { useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";
import Loader from "./Loader";

const ButtonMore: React.FC = () => {
  const buttonMore = useRef(null);
  const { actions, state } = useContext(DataContext);
  const [allData, setAllData] = useState(false);

  useEffect(() => {
    let timeoutID;
    const intervalId = setInterval(() => {
      if (state.loadingGetPhotos) {
        return;
      }
      if (!state.hasNextPage) {
        timeoutID = setTimeout(() => {
          setAllData(true);
        }, 750);
        clearInterval(intervalId);
        return;
      }
      if (allData) {
        setAllData(false);
      }
      const rect = buttonMore.current.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (!isVisible) {
        return;
      }
      actions.getPhotos(state.selectedCategories, false, state.page);
    }, 400);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutID);
    };
  }, [state.loadingGetPhotos]);

  return (
    <div className="button__more" ref={buttonMore}>
      {allData ? <p>Fin des résultats</p> : <Loader />}
    </div>
  );
};

export default ButtonMore;
