import React from 'react';
import { TouchableWithoutFeedback, Keyboard, View, Text } from 'react-native';
import styles from './styles';
import { translation } from '@src/constants';
import ResetPasswordForm from './ResetPasswordForm';

const ResetPasswordScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>{translation.reset_title}</Text>
          <Text style={styles.info}>{translation.reset_info}</Text>
          <ResetPasswordForm />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ResetPasswordScreen;
