import { Field } from "payload/types";
import Cell from "./components/Cell";
import InputColor from "./components/InputColor";

export const validateHexColor = (value: string): true | string => {
  if (value) {
    let match = value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/);
    if (match) {
      return true;
    }
    return `${value} is not a valid hex color`;
  }
  return true;
};

export const backgroundColorField: Field = {
  name: "backgroundColor",
  label: "Couleur de fond",
  type: "text",
  validate: validateHexColor,
  required: true,
  admin: {
    components: {
      Field: InputColor,
      Cell: Cell,
    },
  },
};

export const textColorField: Field = {
  name: "textColor",
  label: "Couleur de texte",
  type: "text",
  validate: validateHexColor,
  required: true,
  admin: {
    components: {
      Field: InputColor,
      Cell: Cell,
    },
  },
};
