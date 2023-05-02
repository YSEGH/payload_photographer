import React, { memo, useContext, useEffect, useRef } from "react";
import FieldWrapper from "./components/FieldWrapper";
import { DataContext } from "../../context/DataContext";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Layout/Loader";
import { getFormData } from "./utils";

type Field = {
  id: string;
  label: string;
  name: string;
};
type Form = {
  id: string;
  fields: Field[];
  confirmationMessage: any;
  submitButtonLabel: string;
};
interface Props {
  form: Form;
}

const FormElement: React.FC<Props> = ({ form }) => {
  const { actions, state } = useContext(DataContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      form: form.id,
      submissionData: getFormData(form.fields, formData),
    };
    actions.sendForm(data);
  };

  useEffect(() => {
    if (state.formSuccess) {
      toast.success(form.confirmationMessage[0].children[0].text, {
        position: "bottom-center",
        theme: "colored",
      });
    }
    if (state.formError.length > 0) {
      ("update error");
      toast.error(state.formError, {
        position: "bottom-center",
        theme: "colored",
      });
    }
    return () => {};
  }, [state.formError, state.formSuccess]);

  return (
    <>
      <form
        autoComplete="off"
        id="form_contact"
        noValidate
        onSubmit={submitFormHandler}
      >
        {Object.entries(form.fields).map(([key, field]: [string, Field]) => {
          let messageError = null;
          let error: boolean = state.formError.some(
            (error) => error.name === field.name
          );
          if (error) {
            state.formError.map((error) =>
              error.name === field.name ? (messageError = error.message) : error
            );
          }
          return (
            <FieldWrapper
              key={field.id}
              field={field}
              error={error}
              messageError={messageError}
            />
          );
        })}
        <div className="form_contact__submit">
          <button
            form="form_contact"
            type="submit"
            disabled={state.loadingForm}
          >
            {state.loadingForm ? (
              <Loader fill="#FFFFFF" />
            ) : (
              form.submitButtonLabel
            )}
          </button>
        </div>
      </form>
      <ToastContainer />
    </>
  );
};

export default FormElement;
