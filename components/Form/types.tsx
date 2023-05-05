export interface FormState {
  id: string;
  customClass: string;
  fields: Field[];
  loading: boolean;
  success: boolean;
  errors: FieldError[];
  confirmationMessage: any;
  submitButtonLabel: string;
}
export type Field = {
  blockName: string;
  blockType: string;
  id: string;
  label: string;
  name: string;
  required: boolean;
  width: number;
};
export interface FieldError {
  name: string;
  message: string;
}
