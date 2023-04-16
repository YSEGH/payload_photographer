import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { DataContext } from "../../context/DataContext";
import { MdClear } from "react-icons/md";
import { motion, useScroll } from "framer-motion";

const Search: React.FC = () => {
  const { state, actions } = useContext(DataContext);
  const [showInput, setShowInput] = useState(false);
  const [displaySearchBar, setDisplaySearchBar] = useState(true);
  const [style, setStyle] = useState({});
  const [values, setValues] = useState(state.selectedCategories);
  const { scrollY } = useScroll();

  const animate = {
    hidden: {
      transform: "translateY(-60px)",
    },
    show: {
      transform: "translateY(0px)",
    },
  };

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      if (!displaySearchBar) {
        setDisplaySearchBar(true);
      }
      return;
    }
    /*  if (showInput) {
      if (!displaySearchBar) {
        console.log(scrollY.get());

        if (scrollY.get() >= 80) {
          setDisplaySearchBar(true);
        }
      }
      return;
    } */
    if (displaySearchBar) {
      if (scrollY.get() >= 80) {
        console.log("hide");
        setDisplaySearchBar(false);
      }
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

  useEffect(() => {
    actions.getCategories();
    setStyle(updateStyle());
    return () => {};
  }, []);

  return (
    <motion.div
      className="component_search"
      initial={animate.show}
      animate={displaySearchBar ? animate.show : animate.hidden}
    >
      <motion.div
        className="component_search__content container--large"
        animate={{ opacity: displaySearchBar ? 1 : 0 }}
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
  );
};

export default Search;
