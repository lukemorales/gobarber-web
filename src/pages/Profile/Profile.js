import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useSelector, useDispatch } from 'react-redux';

import { Container } from './Profile_Styles';
import { updateProfileRequest } from '@/store/modules/user/actions';
import AvatarInput from './AvatarInput';

export default function Profile() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(updateProfileRequest(data));
  }
  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" profile={profile} />

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
