import { GlobalConfig } from "payload/types";
import { FormBlock } from "../blocks/FormBlock/Config";
import payload from "payload";

const Pages: GlobalConfig = {
  slug: "pages",
  label: "Pages du site",
  admin: {},
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "about",
          label: "A propos",
          fields: [
            {
              name: "titleAbout",
              label: "Phrase mise en avant",
              type: "text",
              required: true,
              defaultValue: "About",
            },
            {
              name: "imageAbout",
              label: "Image affichée sous le titre",
              type: "upload",
              relationTo: "media",
              required: true,
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
        {
          name: "contact",
          label: "Contact",
          fields: [
            {
              name: "emailContact",
              label: "Email de contact",
              type: "email",
              required: true,
            },
            {
              name: "imgContact",
              label: "Image affichée à côté du formulaire",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "titleContact",
              label: "Titre situé au dessus du formulaire",
              type: "text",
              required: true,
              defaultValue: "Let’s keep in touch",
            },
            {
              name: "contentContact",
              label: "Texte informatif situé au dessus du formulaire",
              type: "text",
              required: true,
              defaultValue:
                "Send me a message, I will response soon as possible",
            },
            {
              name: "formulaire",
              label: "Formulaire",
              type: "blocks",
              required: true,
              minRows: 1,
              maxRows: 1,
              blocks: [FormBlock],
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
