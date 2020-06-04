import { Alert } from 'react-native';
import { FirebaseError } from 'firebase';

export const networkErrorsHandler = (error: FirebaseError): void => {
  Alert.alert(error.message);
};
