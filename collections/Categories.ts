import { CollectionConfig } from "payload/types";
import {
  backgroundColorField,
  textColorField,
} from "../config/fields/colorField/config";
import { slugField } from "../config/fields/slugField/config";
import { admins } from "../access/admins";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
    disableDuplicate: true,
  },
  access: {
    read: () => true,
    create: admins,
    update: admins,
    delete: admins,
  },
  fields: [
    {
      name: "title",
      label: "Titre",
      type: "text",
      required: true,
      unique: true,
    },
    slugField,
    backgroundColorField,
    textColorField,
  ],
  timestamps: true,
};

export default Categories;
