export type Field = {
  id: string;
  label: string;
  name: string;
};
export type Form = {
  id: string;
  fields: Field[];
  confirmationMessage: any;
  submitButtonLabel: string;
};
