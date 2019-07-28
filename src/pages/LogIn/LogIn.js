import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import logo from '@/assets/img/gobarber_logo.svg';

export default function LogIn() {
  function handleSubmit(data) {
    console.tron.log(data);
  }

  return (
    <>
      <h1>
        <img src={logo} alt="GoBarber" />
      </h1>

      <Form onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />
        <button type="submit">Log In</button>
        <Link to="/signup">Sign Up</Link>
      </Form>
    </>
  );
}
