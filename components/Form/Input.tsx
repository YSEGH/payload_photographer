import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { kasei } from "../Layout/Layout";

const Input = ({ field }) => {
  const { actions } = useContext(DataContext);
  const inputRef = useRef(null);
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
    if (e.target.value) {
      setFocus(true);
    }

    actions.setFormValue(e.target.value, field.name);
  };
  useEffect(() => {
    if (inputRef.current.value) {
      setFocus(true);
    }
    return () => {};
  }, []);

  return (
    <div
      data-name={field.name}
      className={`form_contact__field_wrapper ${focus ? "is_active" : ""} ${
        field.error ? "is_error" : ""
      }`}
    >
      <h4 className={`form_contact__field_title ${kasei.className}`}>
        {field.label}
      </h4>
      <div className="form_contact__input_wrapper">
        <input
          className={kasei.className}
          ref={inputRef}
          spellCheck="false"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          type={field.input_type}
          name={field.name}
          value={field.input_type === "file" ? undefined : field.value}
        />
      </div>
      <div className="form_contact__field_message">
        {!field.error ? (
          <p className={kasei.className}>{!focus && field.description}</p>
        ) : (
          <p className={kasei.className}>{field.error}</p>
        )}
      </div>
    </div>
  );
};

export default memo(Input);
