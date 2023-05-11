import { GlobalConfig } from "payload/types";

const Menu: GlobalConfig = {
  slug: "menu",
  label: "Menu",
  fields: [
    {
      name: "links",
      type: "array",
      label: "Liens du menu",
      minRows: 1,
      maxRows: 5,
      labels: {
        singular: "Lien",
        plural: "Liens",
      },
      fields: [
        {
          name: "page",
          label: "Page",
          type: "relationship",
          relationTo: ["pages"],
          /* filterOptions: ({ relationTo, siblingData }) => {
            // returns a Where query dynamically by the type of relationship
            if (relationTo === "products") {
              return {
                stock: { greater_than: siblingData.quantity },
              };
            }

            if (relationTo === "services") {
              return {
                isAvailable: { equals: true },
              };
            }
          }, */
        },
      ],
      admin: {
        components: {
          RowLabel: ({ data, index }) => {
            return data?.title || `Lien ${String(index).padStart(2, "0")}`;
          },
        },
      },
    },
  ],
};

export default Menu;
