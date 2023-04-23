import { GlobalConfig } from "payload/types";

const Infos: GlobalConfig = {
  slug: "infos",
  label: "Gestion du site",
  admin: {},
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "logo",
          label: "Logo",
          fields: [
            {
              name: "logo",
              label: "Logo du site",
              type: "upload",
              relationTo: "media",
              required: true,
            },
          ],
        },
        {
          name: "contact",
          label: "Contact",
          fields: [
            {
              name: "contact",
              label: "Email de contact",
              type: "email",
              required: true,
            },
          ],
        },
        {
          name: "about",
          label: "A propos",
          fields: [
            {
              name: "imageAbout",
              label: "Image de présentation",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "sentenceAbout",
              label: "Phrase mise en avant",
              type: "text",
              required: true,
              defaultValue: "I take photo",
            },
            {
              name: "contentAbout",
              label: "Texte de présentation",
              type: "richText",
              defaultValue: [
                {
                  children: [
                    { text: "Here is some default content for this field" },
                  ],
                },
              ],
              required: true,
              admin: {
                elements: ["h2", "h3", "h4", "link", "ol", "ul"],
                leaves: ["bold", "italic"],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default Infos;
