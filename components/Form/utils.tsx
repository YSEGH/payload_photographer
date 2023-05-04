export const getFormData = (fields: any[], formData: FormData) => {
  let submissionData = [];
  fields.forEach((field) => {
    submissionData.push({
      field: field.name,
      value: formData.get(field.name),
      title: field.label,
    });
  });
  return submissionData;
};

export const resizeTextArea = (textArea: HTMLTextAreaElement) => {
  textArea.style.height = "auto";
  textArea.style.height = textArea.scrollHeight + "px";
};
