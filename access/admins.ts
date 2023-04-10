import { checkRole } from "./checkRole";

export const admins = ({ req: { user } }) =>
  checkRole(["administrateur"], user);
