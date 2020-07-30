import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <h1>SongBird</h1>
      <div className="d-flex align-items-center">
        <h2>Score</h2>
        <h2>:1</h2>
      </div>
    </div>
  );
};
export default Header;