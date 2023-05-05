import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { FormState } from "./types";
import Form from "./components/Form";
import { FormProvider } from "./context/context";
import Toast from "./components/Toast";

interface Props {
  form: FormState;
}

const FormElement: React.FC<Props> = ({ form }) => {
  return (
    <FormProvider formState={form}>
      <Form />
      <Toast />
    </FormProvider>
  );
};

export default FormElement;
