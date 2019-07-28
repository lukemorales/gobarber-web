import React from 'react';
import { Link } from 'react-router-dom';

import logo from '@/assets/img/gobarber_logo.svg';

export default function LogIn() {
  return (
    <>
      <h1>
        <img src={logo} alt="GoBarber" />
      </h1>

      <form>
        <input type="email" placeholder="Your e-mail" />
        <input type="password" placeholder="Your password" />
        <button type="submit">Log In</button>
        <Link to="/signup">Sign Up</Link>
      </form>
    </>
  );
}
