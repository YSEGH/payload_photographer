import { WorkItem } from "../../components/ContainerWork";
import { v4 as uuidv4 } from "uuid";

export interface PhotosState {
  photos: WorkItem[];
  hasNextPage: boolean;
  page: number;
  loading: Boolean;
  error: string;
}

export interface CategoriesState {
  categories: [];
  selectedCategories: any[];
  loading: Boolean;
  error: string;
}

const photosState: PhotosState = {
  photos: [],
  hasNextPage: true,
  page: 1,
  loading: false,
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
      input_type: "text",
      col: "12",
      label: "Nom",
      name: "lastname",
      value: "",
      description: "Saisissez votre nom",
      error: null,
    },
    firstname: {
      id: uuidv4(),
      type: "input",
      input_type: "text",
      col: "12",
      label: "Prénom",
      name: "firstname",
      value: "",
      description: "Saisissez votre prénom",
      error: null,
    },
    email: {
      id: uuidv4(),
      type: "input",
      input_type: "text",
      col: "12",
      label: "Email",
      name: "email",
      value: "",
      description: "Saisissez votre email",
      error: null,
    },
    message: {
      id: uuidv4(),
      type: "textarea",
      input_type: "",
      col: "12",
      label: "Message",
      name: "message",
      value: "",
      description: "Saisissez votre message",
      error: null,
    },
  },
  loading: false,
  success: null,
  error: null,
};

export { photosState, categoriesState, formState };
