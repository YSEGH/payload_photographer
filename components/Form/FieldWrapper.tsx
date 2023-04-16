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
      className={`form_contact__col form_contact__col--${field.col} form_contact__col--${field.html_tag}`}
    >
      {getComponent()}
    </div>
  );
};

export default memo(FieldWrapper);
