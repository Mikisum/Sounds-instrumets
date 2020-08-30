import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    const { score } = this.props;
    return (
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        <h1 className="logo">Sound<span className="text">Instrument</span></h1>

        <div className="d-flex align-items-center">
          <h5>Score: {score}</h5>
        </div>
      </div>
    );
  }
  
};
