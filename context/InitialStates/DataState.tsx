import { WorkItem } from "../../components/ContainerWork";

export interface DataState {
  photos: WorkItem[];
  tags: string[];
  loading: Boolean;
  error: string;
}

const dataState: DataState = {
  photos: [],
  tags: ["France", "Allemagne"],
  loading: false,
  error: null,
};

export { dataState };
