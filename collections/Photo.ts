import { CollectionConfig } from "payload/types";
import { admins } from "../access/admins";

const Photo: CollectionConfig = {
  slug: "photo",
  admin: {
    useAsTitle: "title",
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
      required: true,
      type: "text",
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
      ],
    },
  ],
};

export default Photo;
