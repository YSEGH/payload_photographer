import { CollectionConfig } from "payload/types";
import { MediaType } from "./Media";
import formatSlug from "../utilities/formatSlug";
import TextWithImage from "../blocks/TextWithImage/Config";
import Text from "../blocks/Text/Config";
import { Image } from "../blocks/Image/Config";
import Spacer from "../blocks/Spacer/Config";

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
    read: (): boolean => true,
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
      blocks: [TextWithImage, Text, Image, Spacer],
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
