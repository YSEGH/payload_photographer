import React from "react";
import FormContact from "../components/FormContact";
import Header from "../components/Header";
import { DataProvider } from "../context/DataContext";

const contact: React.FC = () => {
  return (
    <>
      <Header />
      <DataProvider>
        <div className="container__form container__large">
          <h2 className="form__title">
            I’d love <br />
            <span>to hear you.</span>
          </h2>
          <div className="container__medium">
            <FormContact />
          </div>
        </div>
      </DataProvider>
    </>
  );
};

export default contact;
