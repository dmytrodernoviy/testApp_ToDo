import * as Yup from 'yup';
import { translation } from '@src/constants';

export const SignInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(translation.invalid_email)
    .required(translation.required_field),
  password: Yup.string()
    .min(8, translation.short_password)
    .required(translation.required_field),
});

export const SignUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email(translation.invalid_email)
    .required(translation.required_field),
  password: Yup.string()
    .min(8, translation.short_password)
    .required(translation.required_field),
});
