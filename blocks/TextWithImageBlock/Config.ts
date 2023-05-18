import { Block } from "payload/types";

export const TextWithImageBlock: Block = {
  slug: "textWithImageBlock",
  imageURL: `http://localhost:3000/media/KENZO-1-640x480.png`,
  labels: {
    singular: "Texte avec Image",
    plural: "Texte avec Image",
  },
  fields: [
    {
      label: "Ordre d'affichage",
      name: "order",
      type: "radio",
      admin: {},
      options: [
        {
          label: "Image avant le texte",
          value: "imageText",
        },
        {
          label: "Image après le texte",
          value: "textImage",
        },
      ],
    },
    {
      label: "Taille d'image",
      name: "imageSize",
      type: "radio",
      admin: {},
      options: [
        {
          label: "Petit",
          value: "small",
        },
        {
          label: "Moyen",
          value: "medium",
        },
        {
          label: "Grand",
          value: "large",
        },
      ],
    },
    {
      label: "Image",
      name: "image",
      type: "upload",
      relationTo: "media",
      admin: {},
    },
    {
      label: "Texte",
      name: "content",
      type: "richText",
      admin: {
        elements: [
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "link",
          "blockquote",
          "indent",
          "ul",
          "ol",
        ],
        leaves: ["bold", "italic", "underline"],
      },
    },
  ],
};
