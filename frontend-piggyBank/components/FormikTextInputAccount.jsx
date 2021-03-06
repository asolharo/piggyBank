import { StyleSheet, Text } from 'react-native';
import { useField } from 'formik';

import TextInputAccount from './TextInputAccount';

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    color: '#d73a4a',
  },
});

const FormikTextInputAccount = ({ name, ...props}) => {
  const [field, meta, helpers] = useField(name)
  const showError = meta.touched && meta.error

  return (
    <>
      <TextInputAccount 
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
       
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInputAccount