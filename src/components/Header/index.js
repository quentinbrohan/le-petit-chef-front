import React from 'react';

import LoginForm from 'src/containers/LoginForm';

import './header.scss';

const Header = () => (
  <div className="header">
    <h1 className="page-title">Le Petit Chef</h1>
    <LoginForm />
  </div>
);

export default Header;
