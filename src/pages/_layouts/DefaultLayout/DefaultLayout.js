import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './DefaultLayout_Styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
