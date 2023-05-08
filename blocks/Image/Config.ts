import { Block } from "payload/types";

export const Image: Block = {
  slug: "image",
  labels: {
    singular: "Image",
    plural: "Images",
  },
  fields: [
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "size",
      label: "Taille",
      type: "radio",
      defaultValue: "normal",
      options: [
        {
          label: "Petite",
          value: "small",
        },

        {
          label: "Moyenne",
          value: "medium",
        },
        {
          label: "Large",
          value: "large",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      name: "legend",
      label: "Légende",
      type: "richText",
      admin: {
        elements: ["link"],
      },
    },
  ],
};
