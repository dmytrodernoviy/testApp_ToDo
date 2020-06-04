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
import SignInForm from './SignInForm';
import styles from './styles';
import { normalize } from '@src/utils';
import { translation, screenNames } from '@src/constants';
import { NavigationService } from '@src/services';
import { useSelector } from 'react-redux';
import { AuthSelectors } from '@src/redux/auth/selectors';

const SignInScreen: React.FC = () => {
  const isLoading = useSelector(AuthSelectors.isSignInLoading);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          style={styles.keyboardAvoid}
          keyboardVerticalOffset={-normalize(130, 'height')}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <SignInForm isLoading={isLoading} />
        </KeyboardAvoidingView>
        <View>
          <View style={styles.register}>
            <Text style={styles.text}>{translation["don't_have_account"]}</Text>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(screenNames.SignUp);
              }}>
              <Text style={styles.text}> {translation.register}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignInScreen;
