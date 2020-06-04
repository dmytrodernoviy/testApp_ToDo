import React from 'react';
import { View } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import { NewProjectValidationSchema } from '@src/utils';
import { translation } from '@src/constants';
import styles from './styles';

const NewProjectForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ title: '', description: '' }}
      validationSchema={NewProjectValidationSchema}
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
              label={translation.title}
              style={styles.input}
              mode="outlined"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              error={touched.title && !!errors.title}
              value={values.title}
            />
            <HelperText type="error">
              {touched.title && errors.title}
            </HelperText>
          </View>
          <View style={styles.input}>
            <TextInput
              numberOfLines={5}
              label={translation.description}
              style={styles.input}
              mode="outlined"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              error={touched.description && !!errors.description}
              value={values.description}
            />
            <HelperText type="error">
              {touched.description && errors.description}
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

export default NewProjectForm;
