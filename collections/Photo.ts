import { CollectionConfig } from "payload/types";
import { admins } from "../access/admins";
import { slugField } from "../config/fields/slugField/config";

const Photo: CollectionConfig = {
  slug: "photo",
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
    slugField,
    {
      name: "title",
      label: "Titre",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "categories",
      label: "Catégorie(s)",
      type: "relationship",
      hasMany: true,
      required: true,
      relationTo: "categories",
    },
    {
      name: "slider",
      type: "array",
      label: "Photo(s)",
      minRows: 1,
      labels: {
        singular: "Photo",
        plural: "Photos",
      },
      fields: [
        {
          name: "photo",
          label: "Photo",
          type: "upload",
          relationTo: "media",
          required: true,
        },
        {
          name: "legend",
          label: "Légende",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default Photo;
