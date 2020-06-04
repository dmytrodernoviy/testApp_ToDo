import { SignFormValuesType } from '@src/redux/auth/types';
import { auth } from 'firebase';

class Service {
  signIn(formValues: SignFormValuesType) {
    const { email, password } = formValues;
    return auth().signInWithEmailAndPassword(email, password);
  }
  signUp(formValues: SignFormValuesType) {
    const { email, password } = formValues;
    return auth().createUserWithEmailAndPassword(email, password);
  }
}

export const ServiceAPIAuth = new Service();
