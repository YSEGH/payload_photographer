import FormElement from "../../components/Form";
import { Form } from "../../components/Form/types";

export type Props = {
  blockType: "formelement";
  blockName?: string;
  formelement: Form;
};

export const Component: React.FC<Props> = (props) => {
  const { formelement } = props;
  console.log(formelement);

  const formData: Form = {
    ...formelement.value,
    customClass: "form__contact",
    confirmationMessage:
      formelement.value.confirmationMessage[0].children[0].text,
  };
  return <FormElement form={formData} />;
};
