import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Profile } from './Header_Styles';

import logo from '@/assets/img/gobarber_logo_purple.svg';
import Notifications from '../Notifications';

export default function Header() {
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
              <strong>Luke Morales</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img src="https://ui-avatars.com/api/?background=7159c1&color=fff&name=Luke+Morales" alt="Luke Morales" />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
