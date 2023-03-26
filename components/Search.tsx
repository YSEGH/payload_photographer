import React, { useContext, useEffect, useState, useRef, memo } from "react";
import { MdFilterAlt, MdKeyboardArrowDown } from "react-icons/md";
import Select from "react-select";
import { DataContext } from "../context/DataContext";
import { DataState } from "../context/InitialStates/DataState";

const Search: React.FC = () => {
  const selectInput = useRef(null);
  const { state } = useContext(DataContext);
  const [display, setDisplay] = useState(false);
  const [style, setStyle] = useState({});

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
    setDisplay(!display);
  };

  const onChangeHandler = (values, action) => {};

  const menuIsOpenHandler = () => {
    if (selectInput.current) {
      if (selectInput.current.inputRef.value) {
        setDisplay(true);
        return;
      }
    }
    setDisplay(false);
  };

  useEffect(() => {
    setStyle(updateStyle());
    return () => {};
  }, []);

  return (
    <div className={`component__search container__large`}>
      {state.tags ? (
        <div className="component__search-select-container">
          <Select
            id={1}
            ref={selectInput}
            className={`component__search-select ${
              display ? "component__search-select--active" : ""
            }`}
            classNamePrefix={`component__search`}
            placeholder="Rechercher"
            noOptionsMessage={() => "Aucune correspondance"}
            isMulti
            menuIsOpen={display}
            onInputChange={menuIsOpenHandler}
            options={state.tags}
            styles={style}
            onChange={onChangeHandler}
          />
          <button
            className={`component__search-select-button ${
              display ? "component__search-select-button--rotate" : ""
            }`}
            onClick={() => setDisplay(!display)}
          >
            <MdKeyboardArrowDown />
          </button>
        </div>
      ) : null}
      <button
        className={`component__search-button ${
          display ? "component__search-button--active" : ""
        }`}
        onClick={onClickHandler}
      >
        <MdFilterAlt />
      </button>
    </div>
  );
};

export default memo(Search);
