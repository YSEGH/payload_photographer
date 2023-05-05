import React, { memo, useEffect, useRef } from "react";
import { kasei } from "../../Layout/Layout";

const Input = ({ setFocus, setError, field, success }) => {
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
    setError();
    if (inputRef.current.value) {
      setFocus(true);
      return;
    }
    setFocus(false);
  };

  useEffect(() => {
    if (inputRef.current.value) {
      setFocus(true);
    }
    if (success) {
      inputRef.current.value = "";
      setFocus(false);
    }
    return () => {};
  }, [success]);

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
