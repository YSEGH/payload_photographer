import React from "react";
import { useField } from "payload/components/forms";
import { Label } from "payload/components/forms";
import { Props } from "payload/components/fields/Text";
import { validateHexColor } from "../config";
import "../style/styles.scss";

const baseClass = "color-picker";

const defaultColor = "#000000";

const InputColor: React.FC<Props> = (props) => {
  const { path, label, required } = props;

  const { value, setValue } = useField({
    path,
    validate: validateHexColor,
  });

  return (
    <div className={baseClass}>
      <Label htmlFor={path} label={label} required={required} />
      <input
        type="color"
        name="color"
        defaultValue={value ? value.toString() : defaultColor}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default InputColor;
