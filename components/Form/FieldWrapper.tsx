import React, { memo, useEffect, useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const FieldWrapper = ({ field, error, messageError }) => {
  const [col, setCol] = useState(12);

  const getComponent = () => {
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

  const setColHandler = () => {
    switch (field.width) {
      case 100:
        setCol(12);
        break;
      case 50:
        setCol(6);
        break;
      case 25:
        setCol(3);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setColHandler();
  }, []);

  return (
    <div
      className={`form_contact__col form_contact__col--${col} form_contact__col--${field.blockType}`}
    >
      {getComponent()}
    </div>
  );
};

export default FieldWrapper;
