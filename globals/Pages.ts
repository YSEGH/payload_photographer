import { GlobalConfig } from "payload/types";
import { FormBlock } from "../blocks/FormBlock/Config";

const Pages: GlobalConfig = {
  slug: "pages",
  label: "Pages",
  admin: {},
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          name: "portfolio",
          label: "Portfolio",
          fields: [
            {
              name: "itemNumber",
              label: "Nombre d'éléments par ligne",
              type: "number",
              required: true,
              min: 3,
              max: 6,
              defaultValue: 4,
            },
            {
              name: "navigation",
              label: "Navigation",
              type: "group",
              fields: [
                {
                  name: "active",
                  label: "Activer",
                  type: "checkbox",
                  defaultValue: true,
                },
                {
                  name: "slug",
                  label: "URL de page",
                  type: "text",
                  required: true,
                  defaultValue: "portfolio",
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
                {
                  name: "order",
                  label: "Ordre d'affichage",
                  type: "number",
                  defaultValue: 1,
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
                {
                  name: "title",
                  label: "Titre affiché dans le menu",
                  type: "text",
                  defaultValue: "Portfolio",
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
              ],
            },
            {
              name: "meta",
              label: "Metadonnées",
              type: "group",
              fields: [
                {
                  name: "title",
                  label: "Titre",
                  type: "text",
                },
                {
                  name: "description",
                  label: "Description",
                  type: "textarea",
                },
                {
                  name: "keywords",
                  label: "Mot-clé",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          name: "about",
          label: "A propos",
          fields: [
            {
              name: "title",
              label: "Titre de la page",
              type: "text",
              required: true,
              defaultValue: "About",
            },
            {
              name: "image",
              label: "Image affichée sous le titre",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "content",
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
            {
              name: "navigation",
              label: "Navigation",
              type: "group",
              fields: [
                {
                  name: "active",
                  label: "Activer",
                  type: "checkbox",
                  defaultValue: true,
                },
                {
                  name: "slug",
                  label: "URL de page",
                  type: "text",
                  required: true,
                  defaultValue: "about",
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
                {
                  name: "order",
                  label: "Ordre d'affichage",
                  type: "number",
                  defaultValue: 2,
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
                {
                  name: "title",
                  label: "Titre affiché dans le menu",
                  type: "text",
                  defaultValue: "A Propos",
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
              ],
            },
            {
              name: "meta",
              label: "Metadonnées",
              type: "group",
              fields: [
                {
                  name: "title",
                  label: "Titre",
                  type: "text",
                },
                {
                  name: "description",
                  label: "Description",
                  type: "textarea",
                },
                {
                  name: "keywords",
                  label: "Mot-clé",
                  type: "text",
                },
              ],
            },
          ],
        },
        {
          name: "contact",
          label: "Contact",
          fields: [
            {
              name: "email",
              label: "Email de contact",
              type: "email",
              required: true,
            },
            {
              name: "image",
              label: "Image affichée à côté du formulaire",
              type: "upload",
              relationTo: "media",
              required: true,
            },
            {
              name: "title",
              label: "Titre situé au dessus du formulaire",
              type: "text",
              required: true,
              defaultValue: "Let’s keep in touch",
            },
            {
              name: "content",
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
            {
              name: "navigation",
              label: "Navigation",
              type: "group",
              fields: [
                {
                  name: "active",
                  label: "Activer",
                  type: "checkbox",
                  defaultValue: true,
                },
                {
                  name: "slug",
                  label: "URL de page",
                  type: "text",
                  required: true,
                  defaultValue: "contact",
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
                {
                  name: "order",
                  label: "Ordre d'affichage",
                  type: "number",
                  defaultValue: 3,
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
                {
                  name: "title",
                  label: "Titre affiché dans le menu",
                  type: "text",
                  defaultValue: "Contact",
                  admin: {
                    condition: (data, siblingData) => {
                      if (siblingData.active === true) {
                        return true;
                      }
                      return false;
                    },
                  },
                },
              ],
            },
            {
              name: "meta",
              label: "Metadonnées",
              type: "group",
              fields: [
                {
                  name: "title",
                  label: "Titre",
                  type: "text",
                },
                {
                  name: "description",
                  label: "Description",
                  type: "textarea",
                },
                {
                  name: "keywords",
                  label: "Mot-clé",
                  type: "text",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default Pages;
