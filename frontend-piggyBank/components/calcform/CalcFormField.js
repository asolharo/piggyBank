import React from "react";
import { useFormikContext } from "formik";

import CalcTextInput from "./CalcTextInput";
import ErrorMessage from "./ErrorMessage";

function CalcFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <CalcTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default CalcFormField;
