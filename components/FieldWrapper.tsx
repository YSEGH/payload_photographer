import React, { memo } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const FieldWrapper = ({ field }) => {
  const getComponent = () => {
    switch (field.type) {
      case "input":
        return <Input field={field} />;
      case "textarea":
        return <Textarea field={field} />;
      default:
        return <div></div>;
    }
  };
  return (
    <div
      className={`form--col form--col-${field.col} form--col--${field.input_type}`}
    >
      {getComponent()}
    </div>
  );
};

export default memo(FieldWrapper);
