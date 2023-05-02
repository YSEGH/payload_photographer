import { FileData } from "payload/dist/uploads/types";

export interface PhotosState {
  photos: Doc[];
  scrollPosition: number;
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

export interface filters {
  title: string;
  categories: [];
}

export interface TitleState {
  title: string;
}

export interface Size {
  [k: string]: {
    filename: string;
    filesize: number;
    height: number;
    mimeType: string;
    url: string;
    width: number;
  };
}

export interface Doc {
  categories: [];
  createdAt: string;
  id: string;
  slider: Slider[];
  title: string;
}

export interface Slider {
  id: string;
  photo: File;
}
export interface File extends FileData {
  url: string;
}
