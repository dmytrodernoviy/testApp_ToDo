import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import { translation } from '@src/constants';
import styles from './styles';
import { ForgotPasswordValidationSchema } from '@src/utils';

const ForgotPasswordForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ForgotPasswordValidationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          <View style={styles.input}>
            <TextInput
              keyboardType="email-address"
              label={translation.email}
              style={styles.input}
              mode="outlined"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              error={touched.email && !!errors.email}
              value={values.email}
            />
            <HelperText type="error">
              {touched.email && errors.email}
            </HelperText>
          </View>
          <Button mode="contained" onPress={handleSubmit}>
            {translation.send}
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default ForgotPasswordForm;
