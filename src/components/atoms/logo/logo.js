import React from 'react';
import { Link } from 'gatsby';

import logo from './bacchux.svg';

import './logo.scss';

export const Logo = () => (
  <Link to="/" className="logo">
    <img src={logo} alt="BacchUX logo" />
  </Link>
);

export default Logo;
