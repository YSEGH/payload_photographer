import React, { useContext } from "react";
import styles from "../style/logo.module.css";
import { AppContext } from "../../../context/context";

interface Props {}

const Logo: React.FC<Props> = ({}) => {
  const state = useContext(AppContext);

  console.log(state.logo);

  return (
    <div className={styles.logo}>
      <img src={state.logo} alt="Logo" />
    </div>
  );
};

export default Logo;
