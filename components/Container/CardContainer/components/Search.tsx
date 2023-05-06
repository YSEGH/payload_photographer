import React, { useContext, useEffect, useState } from "react";
import Select from "react-select";
import { DataContext } from "../../../../context/DataContext";
import { MdClear } from "react-icons/md";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import crypto from "crypto";
import styles from "../../style/search.module.css";
import global from "../../../../css/global.module.css";
import cx from "classnames";
import {
  getCategories,
  getPhotos,
  setSelectedCategories,
} from "../../../../context/Actions/DataActions";

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
const animateBar = {
  show: {
    transform: "translateY(0px)",
  },
  hidden: {
    transform: "translateY(-80px)",
  },
};

const Search: React.FC<Props> = () => {
  const state = useContext(DataContext);
  const { scrollY } = useScroll();
  const [display, setDisplay] = useState(true);
  const [style, setStyle] = useState({});
  const [values, setValues] = useState(state.selectedCategories);
  const [uuid, setUuid] = useState(crypto.randomBytes(20).toString("hex"));

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

  scrollY.on("change", () => {
    if (scrollY.get() === 0 || scrollY.get() < scrollY.getPrevious()) {
      setDisplay(true);
      return;
    }
    if (scrollY.get() > 140) {
      setDisplay(false);
    }
  });

  const onChangeHandler = (values, action) => {
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
    <motion.div
      className={styles.searchbar}
      animate={display ? animateBar.show : animateBar.hidden}
      transition={{ delay: 0.1 }}
    >
      <div className={cx(styles.searchbar__content, global.container__large)}>
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
        <div className={styles.searchbar__select}>
          <Select
            id={`searchbar__${uuid}`}
            instanceId={`searchbar__${uuid}`}
            className={styles.searchbar__select}
            controlShouldRenderValue={false}
            classNamePrefix={`searchbar`}
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
