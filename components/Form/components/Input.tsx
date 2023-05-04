import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { kasei } from "../../Layout/Layout";

const Input = ({ setFocus, field, error }) => {
  const { actions, state } = useContext(DataContext);
  const inputRef = useRef(null);

  const onFocusHandler = () => {
    setFocus(true);
  };

  const onBlurHandler = (e) => {
    if (!e.target.value) {
      setFocus(false);
    }
  };

  const onChangeHandler = () => {
    if (error) {
      actions.updateFormError(field.name);
    }
    if ((field.name, inputRef.current.value)) {
      setFocus(true);
      return;
    }
    setFocus(false);
  };

  useEffect(() => {
    if (inputRef.current.value) {
      setFocus(true);
    }
    if (state.formSuccess) {
      inputRef.current.value = "";
      setFocus(false);
    }
    return () => {};
  }, [state.formSuccess]);

  return (
    <input
      className={kasei.className}
      ref={inputRef}
      spellCheck="false"
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      type={field.blockType}
      name={field.name}
    />
  );
};

export default memo(Input);
