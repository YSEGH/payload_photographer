import { buildConfig } from "payload/config";
import dotenv from "dotenv";
import Media from "./collections/Media";
import Photo from "./collections/Photo";
import Categories from "./collections/Categories";
import Users from "./collections/Users/Users";
import formBuilder from "@payloadcms/plugin-form-builder";
import updateSubmissionDataField from "./config/plugins/Form";
import Menu from "./globals/Menu";
import Pages from "./globals/Pages";

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [Users, Media, Photo, Categories],
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
  globals: [Pages, Menu],
  csrf: ["http://localhost:3000"],
});
