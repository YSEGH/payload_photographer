import { Block } from "payload/types";

export const FormBlock: Block = {
  slug: "formBlock",
  labels: { singular: "Formulaire", plural: "Formulaires" },
  fields: [
    {
      name: "form",
      label: "Formulaire",
      type: "relationship",
      relationTo: ["forms"],
      required: true,
    },
  ],
};
