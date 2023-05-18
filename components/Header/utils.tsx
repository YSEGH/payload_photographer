import { WORK_LINK } from "../../utils/link";

export const setHeaderSize = (pathname) => {
  if (pathname === WORK_LINK) {
    return { height: 140 };
  }
  return { height: 80 };
};
