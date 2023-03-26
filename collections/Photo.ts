import { CollectionConfig } from "payload/types";

const Photo: CollectionConfig = {
  slug: "photo",
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
  admin: {
    useAsTitle: "title",
  },
  auth: false,
};

export default Photo;
