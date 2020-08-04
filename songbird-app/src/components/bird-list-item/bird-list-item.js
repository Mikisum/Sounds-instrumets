import React, { Component } from 'react';

import './bird-list-item.css';

export default class BirdListItem extends Component {

  onLabelClick = () => {
    console.log(`${this.props.label}`);
  }
  
  render() {
    const { label } = this.props;

    return (
      <span>
        <span
          className="li-btn">
        </span>
        <span 
          onClick={this.onLabelClick}>
          {label}
        </span>
      </span>
      
    )
  }
}