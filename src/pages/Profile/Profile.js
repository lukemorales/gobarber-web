import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector } from 'react-redux';

import { Container } from './Profile_Styles';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);

  function handleSubmit(data) {}

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full Name" />
        <Input name="email" type="email" placeholder="Your E-mail" />
        <hr />
        <Input name="oldPassword" placeholder="Old Password" />
        <Input name="password" placeholder="New Password" />
        <Input name="Confirmpassword" placeholder="Confirm New Password" />

        <button type="submit">Update Profile</button>
      </Form>

      <button type="button">Log Out</button>
    </Container>
  );
}
