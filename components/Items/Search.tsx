import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { DataContext } from "../../context/DataContext";
import { MdClear, MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion, useScroll } from "framer-motion";

interface Props {
  setSize: Function;
}

const animate = {
  hidden: {
    height: 60,
  },
  initial: {
    height: 80,
  },
  interval: {
    height: 120,
  },
  show: {
    height: 140,
  },
};

const Search: React.FC<Props> = ({ setSize }) => {
  const { state, actions } = useContext(DataContext);
  const [active, setActive] = useState(false);
  const [searchBarStyle, setSearchBarStyle] = useState(true);
  const [style, setStyle] = useState({});
  const [values, setValues] = useState(state.selectedCategories);
  const { scrollY } = useScroll();

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setSearchBarStyle(true);
      return;
    }
    setSearchBarStyle(false);
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
    setActive(!active);
    setSize(activeState);
  };

  useEffect(() => {
    actions.getCategories();
    setStyle(updateStyle());
    return () => {};
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="component_search"
          initial={{ transform: "translateY(0px)" }}
          animate={
            searchBarStyle
              ? { transform: "translateY(0px)" }
              : { transform: "translateY(-20px)" }
          }
          exit={{ transform: "translateY(-60px)" }}
        >
          <motion.div
            className="component_search__content container--large"
            /*         animate={{ opacity: displaySearchBar ? 1 : 0 }}
             */
          >
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
          </motion.div>
        </motion.div>
      )}
      <MdKeyboardArrowDown
        onClick={() => displayHandler()}
        className="display_button__icon"
      />
    </AnimatePresence>
  );
};

export default Search;
