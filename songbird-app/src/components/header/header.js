import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    const { score } = this.props;
    return (
      <div className="d-flex justify-content-between align-items-center">
        <h1>SongBird</h1>
        <div className="d-flex align-items-center">
          <h2>Score: {score}</h2>
        </div>
      </div>
    );
  }
  
};
