import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { DataContext } from "../../context/DataContext";
import { MdClose, MdClear, MdKeyboardArrowDown } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import crypto from "crypto";

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

  const displayHandler = (reset = false) => {
    let activeState = !active;
    setActive(activeState);
    setHeaderSize(activeState, reset);
  };

  useEffect(() => {
    actions.getCategories();
    setStyle(updateStyle());
    return () => {};
  }, []);

  useEffect(() => {
    return () => {
      setActive(false);
      displayHandler(true);
    };
  }, []);

  return (
    <AnimatePresence>
      {active && display && (
        <div className="component_search">
          <div className="component_search__content container--large">
            <div className="filters_container">
              {values.map((value, i) => (
                <motion.div
                  key={value.label}
                  className="tag_item"
                  style={{
                    backgroundColor: value.bgColor,
                    color: value.textColor,
                  }}
                  initial={{ scale: 0 }}
                  animate={active && display ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {value.label}
                  <MdClear onClick={() => onClickHandler(value)} />
                </motion.div>
              ))}
            </div>
            <motion.div
              className="select_container"
              initial={{ scale: 0 }}
              animate={active && display ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.1 }}
            >
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
                styles={style}
                value={values}
                onChange={onChangeHandler}
                defaultValue={state.selectedCategories}
              />
            </motion.div>
          </div>
        </div>
      )}
      <motion.div
        className="display_button__icon"
        animate={display ? animateIcon.show : animateIcon.hidden}
        onClick={() => displayHandler()}
      >
        {active ? <MdClose /> : <MdKeyboardArrowDown />}
      </motion.div>
    </AnimatePresence>
  );
};

export default Search;
