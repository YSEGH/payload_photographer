import { v4 as uuidv4 } from "uuid";
import {
  CategoriesState,
  PhotosState,
  TitleState,
} from "../../utilities/types";

const photosState: PhotosState = {
  photos: [],
  scrollPosition: 0,
  hasNextPage: true,
  page: 1,
  loading: true,
  error: null,
};

const categoriesState: CategoriesState = {
  categories: [],
  selectedCategories: [],
  loading: false,
  error: null,
};

const formState = {
  fields: {
    lastname: {
      id: uuidv4(),
      type: "input",
      html_tag: "input",
      col: "12",
      label: "Nom",
      name: "lastname",
      required: true,
      value: "",
      description: "Saisissez votre nom",
      error: null,
    },
    firstname: {
      id: uuidv4(),
      type: "input",
      html_tag: "input",
      col: "12",
      label: "Prénom",
      name: "firstname",
      required: true,
      value: "",
      description: "Saisissez votre prénom",
      error: null,
    },
    email: {
      id: uuidv4(),
      type: "input",
      html_tag: "input",
      col: "12",
      label: "Email",
      name: "email",
      required: true,
      value: "",
      description: "Saisissez votre email",
      error: null,
    },
    message: {
      id: uuidv4(),
      type: "textarea",
      html_tag: "textarea",
      col: "12",
      label: "Message",
      name: "message",
      required: true,
      value: "",
      description: "Saisissez votre message",
      error: null,
    },
  },
  loading: false,
  success: false,
  error: [],
};

export { photosState, categoriesState, formState };
