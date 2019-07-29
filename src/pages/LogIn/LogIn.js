import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { logInRequest } from '@/store/modules/auth/actions';

import logo from '@/assets/img/gobarber_logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid e-mail address')
    .required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

export default function LogIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(logInRequest(email, password));
  }

  return (
    <>
      <h1>
        <img src={logo} alt="GoBarber" />
      </h1>

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">{loading ? 'Loading...' : 'Log In'}</button>
        <Link to="/signup">Sign Up</Link>
      </Form>
    </>
  );
}
