import { GlobalConfig } from "payload/types";

const General: GlobalConfig = {
  slug: "settings",
  label: "Options",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "logo",
      label: "Logo",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default General;
