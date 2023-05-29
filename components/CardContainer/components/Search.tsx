import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { motion } from "framer-motion";
import crypto from "crypto";
import styles from "../style/search.module.css";
import cx from "classnames";
import { CardContext } from "../context/context";
import {
  getCategories,
  getPhotos,
  setSelectedCategories,
} from "../context/actions";
import { josefin } from "../../../utils/fonts";

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

  useEffect(() => {
    if (state.categories.length === 0) {
      getCategories(state.dispatchCategories);
    }
    setStyle(updateStyle());
    return () => {};
  }, []);

  useEffect(() => {
    setValues(state.selectedCategories);
    return () => {};
  }, [state.selectedCategories.length]);

  return (
    <motion.div className={styles.searchbar}>
      <div className={cx(styles.searchbar__content)}>
        <div className={styles.searchbar__select}>
          <Select
            id={`searchbar__${uuid}`}
            instanceId={`searchbar__${uuid}`}
            className={cx(styles.searchbar__select, josefin.className)}
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
      </div>
    </motion.div>
  );
};

export default Search;
