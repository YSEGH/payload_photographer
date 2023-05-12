import { Block } from "payload/types";

const Form: Block = {
  slug: "formelement",
  labels: { singular: "Formulaire", plural: "Formulaires" },
  fields: [
    {
      name: "formelement",
      label: "Formulaire",
      type: "relationship",
      relationTo: ["forms"],
    },
  ],
};

export default Form;
