import React from "react";

function Form() {
  return (
    <form
      className={styles.form__contact}
      autoComplete="off"
      id="form__contact"
      noValidate
      onSubmit={submitFormHandler}
    >
      {Object.entries(form.fields).map(([key, field]: [string, Field]) => (
        <Col key={field.id} field={field} />
      ))}
      <div className={styles.form__submit}>
        <button form="form__contact" type="submit" disabled={state.loadingForm}>
          {state.loadingForm ? (
            <Loader fill="#FFFFFF" />
          ) : (
            form.submitButtonLabel
          )}
        </button>
      </div>
    </form>
  );
}

export default Form;
