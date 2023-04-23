import { CollectionConfig } from "payload/types";
import { admins } from "../../access/admins";
import { adminsAndUser } from "../../access/adminsAndUser";

const Users: CollectionConfig = {
  slug: "users",
  labels: { singular: "Utilisateur", plural: "Utilisateurs" },
  auth: {
    forgotPassword: {
      generateEmailHTML: ({ token, user }) => {
        console.log(token);

        // Use the token provided to allow your user to reset their password
        // We will send them to the frontend NextJS app instead of sending
        // them to the Payload admin by default
        const resetPasswordURL = `${process.env.NEXT_PUBLIC_SERVER_URL}/reset-password?token=${token}`;

        return `
          <!doctype html>
          <html>
            <body>
              <h1>Hi there</h1>
              <p>Click below to reset your password.</p>
              <p>
                <a href="${resetPasswordURL}">${resetPasswordURL}</a>
              </p>
            </body>
          </html>
        `;
      },
    },
  },
  admin: {
    useAsTitle: "email",
  },
  access: {
    // Anyone can create a user
    create: () => true,

    // Users with role 'admin' can read and update all users
    // But users with role 'customer' can only read and update their own
    read: adminsAndUser,
    update: adminsAndUser,

    // Only admins can delete
    delete: admins,
  },
  fields: [
    {
      name: "firstName",
      label: "Nom",
      type: "text",
      required: true,
      saveToJWT: true,
    },
    {
      name: "lastName",
      label: "Prénom",
      type: "text",
      required: true,
      saveToJWT: true,
    },
    {
      name: "roles",
      label: "Rôle",
      type: "select",
      hasMany: true,
      access: {
        // Only allow admins to update the roles of a user
        update: admins,
      },
      // Default role is 'Contributeur'
      defaultValue: ["contributeur"],
      options: ["administrateur", "contributeur"],
    },
  ],
};

export default Users;
