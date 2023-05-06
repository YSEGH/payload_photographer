import { Config, Plugin } from "payload/config";

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const updateSubmissionDataField: Plugin = (incomingConfig: Config): Config => {
  const config: Config = {
    ...incomingConfig,
    collections: incomingConfig.collections.map((collection) => {
      if (collection.slug === "form-submissions") {
        return {
          ...collection,
          fields: [
            {
              name: "form",
              label: "Formulaire",
              type: "relationship",
              relationTo: "forms",
              required: true,
              admin: {
                readOnly: true,
              },
            },
            {
              name: "submissionData",
              label: "Réponses",
              type: "array",
              admin: {
                readOnly: true,
                components: {
                  RowLabel: ({ data, index }) => {
                    return data?.title;
                  },
                },
              },
              labels: { singular: "Réponse", plural: "Réponses" },
              fields: [
                {
                  name: "field",
                  label: "Champ",
                  type: "text",
                  required: true,
                  admin: {
                    hidden: true,
                  },
                },
                {
                  name: "title",
                  label: "Titre",
                  type: "text",
                  required: true,
                  admin: {
                    hidden: true,
                  },
                },
                {
                  name: "value",
                  label: "Réponse",
                  type: "text",
                  required: true,
                  validate: function (value, { siblingData }) {
                    if (!siblingData.required && value === "") {
                      return true;
                    }
                    if (value !== "") {
                      if (
                        siblingData.field === "email" &&
                        !validateEmail(value)
                      ) {
                        return JSON.stringify({
                          name: siblingData.field,
                          message: "Merci de saisir un adresse email correcte.",
                        });
                      }
                      return true;
                    }
                    return JSON.stringify({
                      name: siblingData.field,
                      message: "Ce champ est requis.",
                    });
                  },
                },
              ],
            },
          ],
        };
      }
      return collection;
    }),
  };
  return config;
};

export default updateSubmissionDataField;
