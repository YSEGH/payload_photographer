import { Block } from "payload/types";

export const SpacerBlock: Block = {
  slug: "spacerBlock",
  labels: { singular: "Espacement", plural: "Espacements" },
  fields: [
    {
      label: "Taille de l'espacement",
      name: "spacer",
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
          label: "Large",
          value: "large",
        },
        {
          label: "Personnalisé",
          value: "custom",
        },
      ],
    },
    {
      label: "Saisissez la taille de l'espacement (px)",
      name: "height",
      type: "number",
      admin: {
        condition: (data, siblingData) => {
          if (siblingData.spacer === "custom") {
            return true;
          }
          return false;
        },
      },
      required: true,
      defaultValue: 50,
    },
  ],
};
