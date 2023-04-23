import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { DataContext } from "../../context/DataContext";
import { MdClear } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import crypto from "crypto";

interface Props {
  display: boolean;
}

const animateFilter = {
  show: {
    transform: "scale(1)",
  },
  hidden: {
    transform: "scale(0)",
  },
  transition: {
    duration: 0.1,
  },
};
const animateBar = {
  show: {
    transform: "translateY(0px)",
  },
  hidden: {
    transform: "translateY(-60px)",
  },
};

const Search: React.FC<Props> = ({ display }) => {
  const { state, actions } = useContext(DataContext);
  const [style, setStyle] = useState({});
  const [values, setValues] = useState(state.selectedCategories);
  const [uuid, setUuid] = useState(crypto.randomBytes(20).toString("hex"));

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
      animate={display ? animateBar.show : animateBar.hidden}
      transition={{ delay: 0.1 }}
    >
      <div className="component_search__content container--large">
        <div className="filters_container">
          <AnimatePresence>
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                className="tag_item"
                initial={animateFilter.hidden}
                animate={animateFilter.show}
                exit={animateFilter.hidden}
                transition={animateFilter.transition}
                style={{
                  backgroundColor: value.bgColor,
                  color: value.textColor,
                }}
              >
                {value.label}
                <MdClear onClick={() => onClickHandler(value)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="select_container">
          <Select
            id={`select_search_${uuid}`}
            instanceId={`select_search_${uuid}`}
            className={`component_search__select`}
            controlShouldRenderValue={false}
            classNamePrefix={`component__search`}
            placeholder="Rechercher"
            noOptionsMessage={() => "Aucune correspondance"}
            isMulti
            options={state.categories}
            closeMenuOnScroll={() => true}
            styles={style}
            value={values}
            onChange={onChangeHandler}
            defaultValue={state.selectedCategories}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
