import React, { Component } from 'react';

import './round-button.css';

export default class RoundButton extends Component {
  render() {
    const { isRightAnswer } = this.props;
    return (
      <button 
        type="button"  
        className={isRightAnswer ? "btn next btn-block" : "btn btn-secondary btn-block level-button"}
        onClick={this.props.isButtonClicked}>Следующий вопрос</button>
    )
  }
}