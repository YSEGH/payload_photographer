import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Media from "./collections/Media";
import Photo from "./collections/Photo";
import Categories from "./collections/Categories";
import Users from "./collections/Users/Users";
import Infos from "./globals/Infos";
import formBuilder from "@payloadcms/plugin-form-builder";
import updateSubmissionDataField from "./config/plugins/Form";
import Page from "./collections/Page";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Users, Media, Photo, Categories, Page],
  plugins: [
    formBuilder({
      formOverrides: {
        labels: {
          singular: "Formulaire",
          plural: "Formulaires",
        },
      },
      formSubmissionOverrides: {
        labels: {
          singular: "Message",
          plural: "Messages",
        },
      },
    }),
    updateSubmissionDataField,
  ],
  globals: [Infos],
  csrf: ["http://localhost:3000"],
});
