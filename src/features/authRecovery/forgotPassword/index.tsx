import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import ForgotPasswordForm from './ForgotPasswordForm';
import styles from './styles';
import { translation, screenNames } from '@src/constants';
import { NavigationService } from '@src/services';

const ForgotPasswordScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.title}>{translation.forgot_title}</Text>
          <Text style={styles.info}>{translation.forgot_info}</Text>
          <ForgotPasswordForm />
        </View>
        <View style={styles.toLogin}>
          <Text style={styles.text}>{translation.have_you_got_an_account}</Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(screenNames.SignIn);
            }}>
            <Text style={styles.text}> {translation.login}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPasswordScreen;
