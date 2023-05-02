import React, { memo, useContext, useEffect, useRef, useState } from "react";
import { DataContext } from "../../../context/DataContext";
import { kasei } from "../../Layout/Layout";
import { resizeTextArea } from "../utils";

const TextArea = ({ field, error, messageError }) => {
  const { actions, state } = useContext(DataContext);
  const textAreaRef = useRef(null);
  const [focus, setFocus] = useState(false);

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
    <div
      data-name={field.name}
      className={`form_contact__field_wrapper ${focus ? "is_active" : ""} ${
        error ? "is_error" : ""
      }`}
    >
      <h4 className={`form_contact__field_title ${kasei.className}`}>
        {field.label}
        {field.required && (
          <span className="form_contact__field_required">*</span>
        )}
      </h4>
      <div className="form_contact__input_wrapper form_contact__input_wrapper--textarea">
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
      </div>
      <div className="form_contact__field_message">
        {!error ? (
          <p className={kasei.className}>{!focus && field.description}</p>
        ) : (
          <p className={kasei.className}>{messageError}</p>
        )}
      </div>
    </div>
  );
};

export default memo(TextArea);
