import { useDispatch } from 'react-redux';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { signUp } from '../../app/auth/use-cases';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Veuillez renseigner une adresse e-mail valide.')
            .required('Veuillez renseigner ce champ.'),
          password: Yup.string().required('Veuillez renseigner ce champ.'),
          passwordConfirmation: Yup.string().oneOf([Yup.ref('password')], 'Les mots de passe ne correspondent pas.'),
        })}
        onSubmit={(values) => dispatch(signUp({ email: values.email, password: values.password }))}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" />
          <ErrorMessage component="div" name="email" />
          <label htmlFor="password">Mot de passe</label>
          <Field id="password" name="password" type="password" />
          <ErrorMessage component="div" name="password" />
          <label htmlFor="passwordConfirmation">Confirmer le mot de passe</label>
          <Field id="passwordConfirmation" name="passwordConfirmation" type="password" />
          <ErrorMessage component="div" name="passwordConfirmation" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
