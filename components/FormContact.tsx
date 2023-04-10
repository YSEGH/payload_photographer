import React, { useContext, useEffect } from "react";
import FieldWrapper from "./FieldWrapper";
import { DataContext } from "../context/DataContext";

const FormContact = () => {
  const { actions, state } = useContext(DataContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const data = {
      variables: {
        lastname: e.target.elements.lastname.value,
        firstname: e.target.elements.firstname.value,
        phone: e.target.elements.phone.value,
        email: e.target.elements.email.value,
        message: e.target.elements.message.value,
      },
    };
    console.log(data);
    actions.submitForm(data);
  };
  useEffect(() => {
    return () => {};
  }, [state.form]);

  // TERMINER FORM

  return (
    <form id="form__contact" onSubmit={submitFormHandler}>
      {Object.entries(state.form).map(([key, field]) => (
        <FieldWrapper key={field.id} field={field} />
      ))}
      <div className="form__contact-button_submit">
        <button form="form__contact" type="submit">
          Envoyer
        </button>
      </div>
    </form>
  );
};

export default FormContact;
