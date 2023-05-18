import FormElement from "../../components/Form";
import { Form } from "../../components/Form/types";

type FormProps = { value: Form };

export type Props = {
  blockType: "formBlock";
  blockName?: string;
  form: FormProps;
};

export const Component: React.FC<Props> = (props) => {
  const { form } = props;
  console.log(form);

  const formData: Form = {
    ...form.value,
    customClass: "form__contact",
    confirmationMessage: form.value.confirmationMessage[0].children[0].text,
  };
  return <FormElement form={formData} />;
};
