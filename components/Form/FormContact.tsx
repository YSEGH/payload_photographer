import React, { useContext, useEffect } from "react";
import FieldWrapper from "./FieldWrapper";
import { DataContext } from "../../context/DataContext";

const FormContact = () => {
  const { actions, state } = useContext(DataContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    const data = {
      variables: {
        lastname: e.target.elements.lastname.value,
        firstname: e.target.elements.firstname.value,
        phone: e.target.elements.phone.value,
        email: e.target.elements.email.value,
        message: e.target.elements.message.value,
      },
    };
    actions.submitForm(data);
  };
  useEffect(() => {
    return () => {};
  }, [state.form]);

  // TERMINER FORM

  return (
    <form id="form_contact" onSubmit={submitFormHandler}>
      {Object.entries(state.form).map(([key, field]) => (
        <FieldWrapper key={field.id} field={field} />
      ))}
      <div className="form_contact__submit">
        <button form="form_contact" type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default FormContact;
