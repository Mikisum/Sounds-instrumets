import React, { Component } from 'react';

import './bird-list.css';
import birdsData from '../services/birds';
import BirdListItem from '../bird-list-item';

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
            onClick={() => this.props.onItemSelected(id)}>
            <BirdListItem label={name}/></li>
      );
    });
  }

  render() {

    const birdItems = this.renderBirdItems(birdsData[0]);
    return (
      <ul className="list-group">
        { birdItems }
      </ul>
    );
  }
  
}

