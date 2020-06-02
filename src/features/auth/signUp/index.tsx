import React from 'react';
import {
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { normalize } from '@src/utils';
import { translation, screenNames } from '@src/constants';
import { NavigationService } from '@src/services';
import SignUpForm from './SignUpForm';

const SignUpScreen: React.FC = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
          keyboardVerticalOffset={-normalize(130, 'height')}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SignUpForm />
        </KeyboardAvoidingView>
        <View>
          <View style={styles.register}>
            <Text style={styles.text}>
              {translation.have_you_got_an_account}
            </Text>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(screenNames.SignIn);
              }}>
              <Text style={styles.text}> {translation.login}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;
