import { CollectionConfig } from "payload/types";
import { MediaType } from "./Media";
import formatSlug from "../utilities/formatSlug";
import TextWithImage from "../blocks/TextWithImage/Config";

export type Type = {
  title: string;
  slug: string;
  image?: MediaType;
  layout: any[];
  meta: {
    title?: string;
    description?: string;
    keywords?: string;
  };
};

export const Page: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: "title",
      label: "Titre de la page",
      type: "text",
      required: true,
    },
    {
      name: "layout",
      label: "Contenu de la page",
      type: "blocks",
      minRows: 1,
      blocks: [TextWithImage],
    },
    {
      name: "meta",
      label: "Page Meta",
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
    {
      name: "slug",
      label: "Slug",
      type: "text",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
    },
  ],
};

export default Page;
