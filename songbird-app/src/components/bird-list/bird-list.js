import React, { Component } from 'react';

import './bird-list.css';
import birdsData from '../services/birds';

export default class BirdList extends Component {

  state = {
    birdsList: null
  };

  componentDidMount(){
    this.setState({
      birdsList: birdsData
    })
  }
  
  renderBirdItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li key={ id } 
            className="list-group-item list-group-item-action"
            onClick={(event) => this.props.onItemSelected(id, event)}>
            <span className="li-btn"></span>
            {name}
        </li>
      );
    });
  }

  render() {
    const { level } = this.props;
    const BirdsList = this.renderBirdItems(birdsData[level]);
    
    return (
      <ul className="list-group">
        { BirdsList }
      </ul>
    );
  }
  
}

