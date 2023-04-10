import React, { useContext, useEffect, useState, useRef, memo } from "react";
import { MdFilterAlt, MdKeyboardArrowDown } from "react-icons/md";
import Select from "react-select";
import { DataContext } from "../context/DataContext";
import { motion, useScroll } from "framer-motion";

const MIN = 0;
const MAX = 375;

const MIN_Y = -200;
const MAX_Y = 0;

const Search: React.FC = () => {
  const { state, actions } = useContext(DataContext);
  const [displayBar, setDisplayBar] = useState(false);
  const [displayOptions, setDisplayOptions] = useState(false);
  const [posY, setPosY] = useState(true);
  const [style, setStyle] = useState({});
  const { scrollY } = useScroll();

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      if (!posY) {
        setPosY(true);
      }
      return;
    }
    if (displayBar) {
      if (!posY) {
        setPosY(true);
      }
      return;
    }
    if (posY) {
      setPosY(false);
    }
  });

  const updateStyle = () => ({
    control: (styles, state) => ({
      ...styles,
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return {
        ...styles,
      };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        backgroundColor: data.color,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: "#000000",
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      ":hover": {
        backgroundColor: data.color,
        color: "white",
      },
    }),
  });

  const onClickHandler = () => {
    setDisplayOptions(!displayOptions);
  };

  const onChangeHandler = (values, action) => {
    if (!values) {
      values = [];
    }
    actions.getPhotos(values, true, 1);
    actions.setSelectedCategories(values);
  };

  const onInputChangeHandler = (value, action) => {
    if (value) {
      setDisplayOptions(true);
      return;
    }
    setDisplayOptions(false);
  };

  useEffect(() => {
    actions.getCategories();
    setStyle(updateStyle());
    return () => {};
  }, []);

  return (
    <div className={`component__search container__large`}>
      <div className="component__search-container">
        <motion.div
          className="component__search-select-container"
          animate={
            displayBar
              ? { transform: `translateX(${MIN}px)` }
              : { transform: `translateX(${MAX}px)` }
          }
        >
          <Select
            id="long-value-select"
            instanceId="long-value-select"
            className={`component__search-select`}
            classNamePrefix={`component__search`}
            placeholder="Rechercher"
            noOptionsMessage={() => "Aucune correspondance"}
            isMulti
            menuIsOpen={displayOptions}
            onInputChange={onInputChangeHandler}
            options={state.categories}
            styles={style}
            onChange={onChangeHandler}
            defaultValue={state.selectedCategories}
          />
        </motion.div>
        <motion.button
          animate={
            posY
              ? { transform: `translateY(${MAX_Y}px)` }
              : { transform: `translateY(${MIN_Y}px)` }
          }
          initial={{ transform: `translateY(${MIN_Y}px)` }}
          className={`component__search-select-button ${
            displayOptions ? "component__search-select-button--rotate" : ""
          }`}
          onClick={() => setDisplayBar(!displayBar)}
        >
          <MdFilterAlt />
        </motion.button>
      </div>
      {/* <button
        className={`component__search-button ${
          displayBar ? "component__search-button--active" : ""
        }`}
        onClick={onClickHandler}
      >
        <MdFilterAlt />
      </button> */}
    </div>
  );
};

export default Search;
