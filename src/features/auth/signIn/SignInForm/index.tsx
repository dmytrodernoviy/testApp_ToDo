import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import { SignInValidationSchema } from '@src/utils';
import { translation, screenNames } from '@src/constants';
import styles from './styles';
import { NavigationService, DispatcherService } from '@src/services';

interface Props {
  isLoading: boolean;
}

const SignInForm: React.FC<Props> = ({ isLoading }) => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignInValidationSchema}
      onSubmit={(values) => {
        DispatcherService.signIn({ payload: values });
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
            {translation.sign_in}
          </Button>
          <TouchableOpacity
            style={styles.forgot}
            onPress={() => {
              NavigationService.navigate(screenNames.ForgotPassword);
            }}>
            <Text style={styles.forgot_label}>
              {translation.forgot_password}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
