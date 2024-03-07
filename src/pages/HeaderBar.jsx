import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBar = () => {
  return (
    <header className="header-bar">
      <div className="header-bar__left">
        <button className="breadcrumb-icon">/* Your breadcrumb icon code */</button>
        <Link to="/" className="home-link">
          Home
        </Link>
      </div>
      <div className="header-bar__right">
        <button className="external-tab-icon">/* Your external tab icon code */</button>
        <button className="print-icon">/* Your print icon code */</button>
      </div>
    </header>
  );
};

export default HeaderBar;