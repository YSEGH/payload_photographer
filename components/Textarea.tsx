import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../context/DataContext";

const TextArea = ({ field }) => {
  const { actions } = useContext(DataContext);
  const textAreaRef = useRef(null);

  const resizeTextArea = () => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  };
  const [focus, setFocus] = useState(false);
  const onFocusHandler = () => {
    setFocus(true);
  };
  const onBlurHandler = (e) => {
    if (!e.target.value) {
      setFocus(false);
    }
  };
  const onChangeHandler = (e) => {
    actions.setFormValue(e.target.value, field.name);
    if (e.target.value) {
      setFocus(true);
    }
  };
  useEffect(resizeTextArea, [field.value]);
  return (
    <div
      data-name={field.name}
      className={`form--field--wrapper ${focus ? "is_active" : ""} ${
        field.error ? "is_error" : ""
      }`}
    >
      <h4 className="form--field--title">{field.label}</h4>
      <div className="form--field--input_wrapper textarea">
        <textarea
          spellCheck="false"
          ref={textAreaRef}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          name={field.name}
          value={field.value}
          rows={1}
        />
      </div>
      <div className="form--field--message">
        {!field.error ? (
          <p className="">{field.description}</p>
        ) : (
          <p className="">{field.error}</p>
        )}
      </div>
    </div>
  );
};

export default memo(TextArea);
