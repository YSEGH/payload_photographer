import { CollectionConfig } from "payload/types";

export type MediaType = {
  filename: string;
  width: number;
  height: number;
  alt: string;
  sizes: {
    small?: {
      filename: string;
      width: number;
      height: number;
    };
    medium?: {
      filename: string;
      width: number;
      height: number;
    };
    large?: {
      filename: string;
      width: number;
      height: number;
    };
  };
};

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: (): boolean => true, // Everyone can read Media
  },
  upload: {
    adminThumbnail: "small",
    imageSizes: [
      {
        name: "small",
        width: 480,
        height: 320,
      },
      {
        name: "medium",
        width: 800,
        height: 600,
      },
      {
        name: "large",
        width: 1280,
        height: 720,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      label: "Alt Text",
      type: "text",
      required: true,
    },
  ],
};

export default Media;
