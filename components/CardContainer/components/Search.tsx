import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { MdClear } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import crypto from "crypto";
import styles from "../style/search.module.css";
import cx from "classnames";
import { CardContext } from "../context/context";
import {
  getCategories,
  getPhotos,
  setSelectedCategories,
} from "../context/actions";

interface Props {}

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

const uuid = crypto.randomBytes(20).toString("hex");

const Search: React.FC<Props> = () => {
  const state = useContext(CardContext);
  const [style, setStyle] = useState({});
  const [values, setValues] = useState(state.selectedCategories);

  const updateStyle = () => ({
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

  const onChangeHandler = (values) => {
    if (!values) {
      values = [];
    }
    setValues(values);
    getPhotos({ categories: values }, true, 1, state.dispatchPhotos);
    setSelectedCategories(values, state.dispatchCategories);
  };

  const onClickHandler = (value) => {
    let valuesUpdated = values.filter((x) => x.label !== value.label);
    setValues(valuesUpdated);
    setSelectedCategories(valuesUpdated, state.dispatchCategories);
    getPhotos({ categories: valuesUpdated }, true, 1, state.dispatchPhotos);
  };

  useEffect(() => {
    getCategories(state.dispatchCategories);
    setStyle(updateStyle());
    return () => {};
  }, []);

  return (
    <motion.div className={styles.searchbar}>
      <div className={cx(styles.searchbar__content)}>
        <div className={styles.searchbar__select}>
          <Select
            id={`searchbar__${uuid}`}
            instanceId={`searchbar__${uuid}`}
            className={styles.searchbar__select}
            controlShouldRenderValue={false}
            classNamePrefix={`searchbar`}
            placeholder="Rechercher..."
            noOptionsMessage={() => "Aucune correspondance"}
            isMulti
            openMenuOnClick={false}
            options={state.categories}
            closeMenuOnScroll={() => true}
            styles={style}
            value={values}
            onChange={onChangeHandler}
            defaultValue={state.selectedCategories}
          />
        </div>
        <div className={styles.searchbar__filters}>
          <AnimatePresence>
            {values.map((value, i) => (
              <motion.div
                key={value.label}
                className={styles.filter__item}
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
      </div>
    </motion.div>
  );
};

export default Search;
