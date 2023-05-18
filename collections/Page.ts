import { CollectionConfig } from "payload/types";
import { MediaType } from "./Media";
import formatSlug from "../utils/formatSlug";
import { TextWithImageBlock } from "../blocks/TextWithImageBlock/Config";
import { TextBlock } from "../blocks/TextBlock/Config";
import { ImageBlock } from "../blocks/ImageBlock/Config";
import { SpacerBlock } from "../blocks/SpacerBlock/Config";
import { FormBlock } from "../blocks/FormBlock/Config";
import { GalleryBlock } from "../blocks/GalleryBlock/Config";

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
      blocks: [
        TextWithImageBlock,
        TextBlock,
        ImageBlock,
        SpacerBlock,
        FormBlock,
        GalleryBlock,
      ],
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
    {
      name: "status",
      label: "Publier",
      type: "checkbox",
      admin: {
        position: "sidebar",
      },
      defaultValue: false,
    },
  ],
};

export default Page;
