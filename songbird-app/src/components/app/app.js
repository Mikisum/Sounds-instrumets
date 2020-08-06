import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import RandomBird from '../random-bird';
import BirdList from '../bird-list';
import BirdDetails from '../bird-details';
import RoundButton from '../round-button';

export default class App extends Component {

  state = {
    selectedBird: null
  };

  onBirdSelected = (id) => {
    this.setState({
      selectedBird: id
      
    });
  };

  render() {
    return (
    <div>
      <Header />
      <ItemList />
      <RandomBird />    
      <div className="row mb-2">
        <div className="col-md-6">
          <BirdList onItemSelected={this.onBirdSelected}/>
        </div>
        <div className="col-md-6">
          <BirdDetails birdId={this.state.selectedBird}/>
        </div>
      </div>
      <RoundButton/>
    </div>
    );
  }
  
};

