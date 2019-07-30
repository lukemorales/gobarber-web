import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './Header_Styles';

import logo from '@/assets/img/gobarber_logo_purple.svg';
import Notifications from '../Notifications';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <h1>
            <img src={logo} alt="GoBarber" />
          </h1>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src={
                (profile.avatar && profile.avatar.url) ||
                `https://ui-avatars.com/api/?background=7159c1&color=fff&name=${profile.name}`
              }
              alt={profile.name}
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
