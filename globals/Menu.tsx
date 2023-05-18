import { GlobalConfig } from "payload/types";

const Menu: GlobalConfig = {
  slug: "menu",
  label: "Menu",
  access: {
    read: (): boolean => true,
  },
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
          filterOptions: ({ relationTo, siblingData }) => {
            if (relationTo === "pages") {
              return {
                status: { equals: true },
              };
            }
          },
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
