import React, { ReactElement } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const FieldWrapper = ({ field, error, messageError }) => {
  const getFieldComponent = (): ReactElement => {
    switch (field.blockType) {
      case "text":
      case "email":
        return (
          <Input field={field} error={error} messageError={messageError} />
        );
      case "textarea":
        return (
          <Textarea field={field} error={error} messageError={messageError} />
        );
      default:
        return <div></div>;
    }
  };
  return (
    <div
      className={`form_contact__col form_contact__col--${field.width} form_contact__col--${field.blockType}`}
    >
      {getFieldComponent()}
    </div>
  );
};

export default FieldWrapper;
