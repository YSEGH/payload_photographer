import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { DataContext } from "../../context/DataContext";
import { MdClear, MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion, useScroll } from "framer-motion";

interface Props {
  setHeaderSize: Function;
  display: boolean;
}

const animateIcon = {
  show: {
    scale: 1,
  },
  hidden: {
    scale: 0,
  },
};

const Search: React.FC<Props> = ({ setHeaderSize, display }) => {
  const { state, actions } = useContext(DataContext);
  const [active, setActive] = useState(false);
  const [style, setStyle] = useState({});
  const [values, setValues] = useState(state.selectedCategories);

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
        backgroundColor: data.bgColor,
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.textColor,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.textColor,
      cursor: "pointer",
      ":hover": {},
    }),
  });

  const onChangeHandler = (values, action) => {
    if (!values) {
      values = [];
    }
    setValues(values);
    actions.getPhotos({ categories: values }, true, 1);
    actions.setSelectedCategories(values);
  };

  const onClickHandler = (value) => {
    let valuesUpdated = values.filter((x) => x.label !== value.label);
    setValues(valuesUpdated);
    actions.setSelectedCategories(valuesUpdated);
    actions.getPhotos({ categories: valuesUpdated }, true, 1);
  };

  const displayHandler = () => {
    let activeState = !active;
    setActive(activeState);
    setHeaderSize(activeState);
  };

  useEffect(() => {
    actions.getCategories();
    setStyle(updateStyle());
    return () => {};
  }, []);

  return (
    <AnimatePresence>
      {active && display && (
        <div className="component_search">
          <div className="component_search__content container--large">
            <div className="filters_container">
              {values.map((value) => (
                <div
                  key={value.label}
                  className="tag_item"
                  style={{
                    backgroundColor: value.bgColor,
                    color: value.textColor,
                  }}
                >
                  {value.label}
                  <MdClear onClick={() => onClickHandler(value)} />
                </div>
              ))}
            </div>
            <div className="select_container">
              <Select
                id="select_search"
                instanceId="select_search"
                className={`component_search__select`}
                controlShouldRenderValue={false}
                classNamePrefix={`component__search`}
                placeholder="Rechercher"
                noOptionsMessage={() => "Aucune correspondance"}
                isMulti
                options={state.categories}
                styles={style}
                value={values}
                onChange={onChangeHandler}
                defaultValue={state.selectedCategories}
              />
            </div>
          </div>
        </div>
      )}
      <motion.div
        className="display_button__icon"
        animate={display ? animateIcon.show : animateIcon.hidden}
      >
        {active ? (
          <p onClick={() => displayHandler()}>x</p>
        ) : (
          <MdKeyboardArrowDown onClick={() => displayHandler()} />
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Search;
