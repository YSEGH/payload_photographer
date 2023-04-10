import { Access } from "payload/config";
import { checkRole } from "./checkRole";

export const adminsAndUser: Access = ({ req: { user } }) => {
  if (checkRole(["administrateur, contributeur"], user)) {
    return true;
  }

  if (user) {
    return {
      email: user.email,
    };
  }

  return false;
};
