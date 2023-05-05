export interface FormState {
  id: string;
  fields: Field[];
  loading: boolean;
  success: boolean;
  error: FieldError[];
  confirmationMessage: any;
  submitButtonLabel: string;
}
export type Field = {
  id: string;
  label: string;
  name: string;
};
export interface FieldError {
  name: string;
  message: string;
}
