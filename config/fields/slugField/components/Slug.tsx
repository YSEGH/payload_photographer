import React, { useEffect } from "react";
import { Text, useField, useFormFields } from "payload/components/forms";
import { Label } from "payload/components/forms";
import { Props } from "payload/components/fields/Text";
import { slugify } from "../../../../components/CardContainer/utils";

const Slug: React.FC<Props> = (props) => {
  const { path, label, required, unique } = props;

  const title = useFormFields(([fields, dispatch]) => fields.title);

  const { value, setValue, errorMessage, showError } = useField({
    path,
  });

  useEffect(() => {
    if (title.value) {
      setValue(slugify(title.value));
    }
    return () => {};
  }, [title.value]);

  return (
    <div className={`field-type text ${showError ? "error" : ""}`}>
      <Label htmlFor={path} label={label} required={required} />
      <Text name="slug" defaultValue={value} admin={{ readOnly: true }} />
    </div>
  );
};

export default Slug;
