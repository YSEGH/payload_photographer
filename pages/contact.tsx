import payload from "payload";
import React from "react";
import FormElement from "../components/Form";
import { FormState } from "../components/Form/types";
import { kasei } from "../utilities/fonts";

interface Contact {
  title: String;
  description: String;
}

interface Props {
  infos: Contact;
  form: any;
}

const contact: React.FC<Props> = ({ infos, form }) => {
  const formState: FormState = {
    ...form,
    errors: [],
    customClass: "form__contact",
    confirmationMessage: form.confirmationMessage[0].children[0].text,
  };

  return (
    <div className="page_contact__container container--large">
      <div className="page_contact__text">
        <h3 className={`page_contact__text--title ${kasei.className}`}>
          {infos.title}
        </h3>
        <p className={`page_contact__text--description ${kasei.className}`}>
          {infos.description}
        </p>
      </div>
      <div className="page_contact__form">
        <FormElement form={formState} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { contact } = await payload.findGlobal({
    slug: "infos",
  });
  const { docs: form } = await payload.find({
    collection: "forms",
    where: {
      title: { equals: "Contact" },
    },
  });

  return {
    props: {
      infos: contact,
      form: form[0],
    },
  };
}

export default contact;
