import { motion, AnimatePresence, useScroll } from "framer-motion";
import React, { useEffect, useState } from "react";
import style from "./style/index.module.css";

const variants = {
  show: {
    scale: 1,
    transition: {
      duration: 0.1,
      scale: {
        type: "spring",
        damping: 8,
        stiffness: 100,
        restDelta: 0.001,
      },
    },
  },
  hidden: {
    scale: 0,
    transition: {
      duration: 0.1,
    },
  },
  hover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
};

const index = () => {
  const { scrollY } = useScroll();
  const [display, setDisplay] = useState(false);

  scrollY.on("change", () => {
    if (scrollY.get() > 300) {
      if (!display) {
        setDisplay(true);
      }

      return;
    }

    if (display) {
      setDisplay(false);
    }
  });

  const onClickHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    return () => {};
  }, [display]);

  return (
    <AnimatePresence>
      {display && (
        <motion.div
          onClick={onClickHandler}
          className={style.scroll_to_top}
          variants={variants}
          initial={"hidden"}
          animate={"show"}
          whileHover={"hover"}
          exit={"hidden"}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9999 13.4098L12.7099 9.16982C12.617 9.07609 12.5064 9.0017 12.3845 8.95093C12.2627 8.90016 12.132 8.87402 11.9999 8.87402C11.8679 8.87402 11.7372 8.90016 11.6154 8.95093C11.4935 9.0017 11.3829 9.07609 11.2899 9.16982L7.04995 13.4098C6.95622 13.5028 6.88183 13.6134 6.83106 13.7352C6.78029 13.8571 6.75415 13.9878 6.75415 14.1198C6.75415 14.2518 6.78029 14.3825 6.83106 14.5044C6.88183 14.6263 6.95622 14.7369 7.04995 14.8298C7.23731 15.0161 7.49076 15.1206 7.75495 15.1206C8.01913 15.1206 8.27259 15.0161 8.45995 14.8298L11.9999 11.2898L15.5399 14.8298C15.7262 15.0146 15.9776 15.1187 16.2399 15.1198C16.3716 15.1206 16.502 15.0954 16.6239 15.0456C16.7457 14.9958 16.8565 14.9225 16.9499 14.8298C17.047 14.7402 17.1254 14.6322 17.1805 14.5122C17.2356 14.3921 17.2664 14.2623 17.271 14.1302C17.2757 13.9982 17.2541 13.8666 17.2076 13.7429C17.161 13.6193 17.0905 13.506 16.9999 13.4098Z"
              fill="white"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default index;
