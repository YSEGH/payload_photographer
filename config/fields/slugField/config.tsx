import { Field } from "payload/types";
import Slug from "./components/Slug";
import Cell from "./components/Cell";

export const slugField: Field = {
  name: "slug",
  label: "Slug",
  type: "text",
  unique: true,
  required: true,
  admin: {
    position: "sidebar",
    components: {
      Field: Slug,
      Cell: Cell,
    },
  },
};
