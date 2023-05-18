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
  slider: any[];
  title: string;
}
