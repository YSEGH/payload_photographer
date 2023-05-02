import { CollectionConfig } from "payload/types";
import {
  backgroundColorField,
  textColorField,
} from "../config/fields/colorField/config";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      label: "Nom",
      type: "text",
    },
    backgroundColorField,
    textColorField,
  ],
  timestamps: false,
};

export default Categories;
