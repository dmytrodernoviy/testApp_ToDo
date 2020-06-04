import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import { SignUpValidationSchema } from '@src/utils';
import { translation } from '@src/constants';
import styles from './styles';
import { DispatcherService } from '@src/services';

interface Props {
  isLoading: boolean;
}

const SignUpForm: React.FC<Props> = ({ isLoading }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignUpValidationSchema}
      onSubmit={(values) => {
        DispatcherService.signUp({ payload: values });
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
          <View style={styles.input}>
            <TextInput
              secureTextEntry={true}
              label={translation.password}
              style={styles.input}
              mode="outlined"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              error={touched.password && !!errors.password}
              value={values.password}
            />
            <HelperText type="error">
              {touched.password && errors.password}
            </HelperText>
          </View>
          <Button mode="contained" onPress={handleSubmit} loading={isLoading}>
            {translation.sign_up}
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;
