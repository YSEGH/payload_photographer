import React, { memo, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";

const Input = ({ field }) => {
  const { actions } = useContext(DataContext);
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
    console.log(e.target.value, field.name);

    actions.setFormValue(e.target.value, field.name);
  };
  useEffect(() => {
    console.log(field);

    return () => {};
  }, []);

  return (
    <div
      data-name={field.name}
      className={`form--field--wrapper ${focus ? "is_active" : ""} ${
        field.error ? "is_error" : ""
      }`}
    >
      <h4 className="form--field--title">{field.label}</h4>
      <div className="form--field--input_wrapper">
        <input
          spellCheck="false"
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          type={field.input_type}
          name={field.name}
          value={field.input_type === "file" ? undefined : field.value}
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

export default memo(Input);
