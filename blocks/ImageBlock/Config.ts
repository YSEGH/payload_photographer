import { Block } from "payload/types";

export const ImageBlock: Block = {
  slug: "imageBlock",
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
        {
          label: "Personnalisé",
          value: "custom",
        },
        {
          label: "Par défaut",
          value: "default",
        },
      ],
      admin: {
        layout: "horizontal",
      },
    },
    {
      label: "Saisissez la hauteur de l'image (px)",
      name: "height",
      type: "number",
      admin: {
        condition: (data, siblingData) => {
          if (siblingData.size === "custom") {
            return true;
          }
          return false;
        },
      },
      required: true,
      defaultValue: 50,
    },
    {
      name: "container",
      label: "Marges latérales",
      type: "checkbox",
      defaultValue: true,
      admin: {
        condition: (data, siblingData) => {
          if (siblingData.size === "large") {
            return true;
          }
          return false;
        },
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
