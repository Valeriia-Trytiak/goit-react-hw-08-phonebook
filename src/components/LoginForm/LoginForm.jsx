import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormInner,
  LeftDecoration,
  RightDecoration,
  Circle,
  StyledInput,
  StyledForm,
  ButtonSubmit,
  Error,
} from './LoginForm.styled';
import { logIn } from 'redux/auth/operations';

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const ContactShema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('This is a required field'),
  password: Yup.string().required('This is a required field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm({ email: '', password: '' });
  };
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values, actions) => {
        handleSubmit(values, actions);
      }}
      validationSchema={ContactShema}
    >
      <StyledForm>
        <LeftDecoration></LeftDecoration>
        <RightDecoration></RightDecoration>
        <Circle></Circle>
        <FormInner>
          <label>
            Email
            <StyledInput name="email" type="email" />
            <Error name="email" component="span" />
          </label>
          <label>
            Password
            <StyledInput name="password" type="password" />
            <Error name="password" component="span" />
          </label>
          <ButtonSubmit type="submit">Log In</ButtonSubmit>
        </FormInner>
      </StyledForm>
    </Formik>
  );
};