import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './AuthLayout_Styles';

export default function AuthLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
