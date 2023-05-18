import { Block } from "payload/types";

export const TextBlock: Block = {
  slug: "textBlock",
  labels: {
    singular: "Texte",
    plural: "Textes",
  },
  fields: [
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
    {
      label: "Alignement du texte",
      name: "textAlign",
      type: "radio",
      admin: {},
      options: [
        {
          label: "Gauche",
          value: "left",
        },
        {
          label: "Centre",
          value: "center",
        },
        {
          label: "Droite",
          value: "right",
        },
        {
          label: "Justifié",
          value: "justify",
        },
      ],
    },
    {
      label: "Position du bloc",
      name: "position",
      type: "radio",
      admin: {},
      options: [
        {
          label: "Gauche",
          value: "left",
        },
        {
          label: "Milieu",
          value: "center",
        },
        {
          label: "Droite",
          value: "right",
        },
      ],
    },
    {
      label: "Largeur du bloc (px)",
      name: "width",
      type: "number",
      admin: {},
      required: true,
      defaultValue: 500,
    },
    {
      label: "Animation au scroll",
      name: "scrollAnimation",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};
