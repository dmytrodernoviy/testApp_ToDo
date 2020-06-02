import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import { ResetPasswordValidationSchema } from '@src/utils';
import { translation } from '@src/constants';
import styles from './styles';

const ResetPasswordForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ new_password: '', confirm_password: '' }}
      validationSchema={ResetPasswordValidationSchema}
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
              secureTextEntry
              label={translation.new_password}
              style={styles.input}
              mode="outlined"
              onChangeText={handleChange('new_password')}
              onBlur={handleBlur('new_password')}
              error={touched.new_password && !!errors.new_password}
              value={values.new_password}
            />
            <HelperText type="error">
              {touched.new_password && errors.new_password}
            </HelperText>
          </View>
          <View style={styles.input}>
            <TextInput
              secureTextEntry
              label={translation.confirm_password}
              style={styles.input}
              mode="outlined"
              onChangeText={handleChange('confirm_password')}
              onBlur={handleBlur('confirm_password')}
              error={touched.confirm_password && !!errors.confirm_password}
              value={values.confirm_password}
            />
            <HelperText type="error">
              {touched.confirm_password && errors.confirm_password}
            </HelperText>
          </View>
          <Button mode="contained" onPress={handleSubmit}>
            {translation.reset}
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default ResetPasswordForm;
