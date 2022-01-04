import React, { Component } from 'react';

import './bird-list-item.css';

export default class BirdListItem extends Component {

  state = {
    error: false,
    success: false
  }

  onLabelClick = () => {
    this.setState({
      error: true
    })
  }
  
  render() {
    const { label } = this.props;
    const { error, success } = this.state;

    let classNames = 'li-btn';
    if (error) {
      classNames += ' error';
    }
    if (success) {
      classNames += ' success';
    }

    return (
      <span>
        <span
          className={classNames}>
        </span>
        <span 
          onClick={this.onLabelClick}>
          {label}
        </span>
      </span>
      
    )
  }
}