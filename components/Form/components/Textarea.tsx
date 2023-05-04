import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { kasei } from "../../Layout/Layout";
import { resizeTextArea } from "../utils";

const TextArea = ({ setFocus, field, error, messageError }) => {
  const { actions, state } = useContext(DataContext);
  const textAreaRef = useRef(null);

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
    resizeTextArea(textAreaRef.current);
    if (textAreaRef.current.value) {
      setFocus(true);
      return;
    }
    setFocus(false);
  };

  useEffect(() => {
    if (textAreaRef.current.value) {
      setFocus(true);
    }
    if (state.formSuccess) {
      textAreaRef.current.value = "";
      setFocus(false);
    }
    return () => {};
  }, [state.formSuccess]);

  return (
    <textarea
      className={kasei.className}
      spellCheck="false"
      ref={textAreaRef}
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      onChange={onChangeHandler}
      name={field.name}
      value={field.value}
      rows={1}
    />
  );
};

export default memo(TextArea);
