import { Block } from "payload/types";

const TextWithImage: Block = {
  slug: "textwithimage",
  imageURL: `http://localhost:3000/media/KENZO-1-640x480.png`,
  labels: {
    singular: "Texte + Image",
    plural: "Texte + Image",
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
          value: "image_text",
        },
        {
          label: "Image après le texte",
          value: "text_image",
        },
      ],
    },
    {
      label: "Taille d'image",
      name: "image_size",
      type: "radio",
      admin: {},
      options: [
        {
          label: "Petit",
          value: "small",
        },
        {
          label: "Moyen",
          value: "middle",
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

export default TextWithImage;
