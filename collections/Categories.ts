import { CollectionConfig } from "payload/types";
import {
  backgroundColorField,
  textColorField,
} from "../config/fields/colorField/config";
import { slugify } from "../components/Containers/CardContainer/utils";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name",
  },
  access: {
    create: () => true,
    read: () => true,
    delete: () => true,
    update: () => true,
  },
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        hidden: true,
      },
      hooks: {
        beforeValidate: [
          ({ data }) => {
            return slugify(data.name);
          },
        ],
      },
    },
    {
      name: "name",
      label: "Nom",
      type: "text",
      required: true,
      unique: true,
    },
    backgroundColorField,
    textColorField,
  ],
  timestamps: false,
};

export default Categories;
