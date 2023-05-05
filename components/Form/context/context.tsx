import React, { useReducer } from "react";
import { formReducer } from "./reducer";
import { FormState } from "../types";

export const FormContext = React.createContext(null);

const { Provider } = FormContext;

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element);
  formState: FormState;
};

export const FormProvider: React.FC<Props> = ({ children, formState }) => {
  const [form, dispatch] = useReducer(formReducer, formState);
  const state = { ...form, dispatch: dispatch };
  const value = React.useMemo(() => state, [form]);
  return <Provider value={value}>{children}</Provider>;
};
