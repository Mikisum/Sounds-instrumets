import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import RandomBird from '../random-bird';
import BirdList from '../bird-list';
import BirdDetails from '../bird-details';
import RoundButton from '../round-button';

import './app.css';

export default class App extends Component {

  state = {
    selectedBird: null,
    level: 0,
    random:0,
    isWin: false
  };

  componentDidMount() {
    this.setState({
      random: this.randomBird()
    });
  }

  randomBird = () => {
    return Math.floor(Math.random() * 6);
  }

  onBirdSelected = (id, event) => {
    event.persist();
    this.setState({
      selectedBird: id - 1
    });
    this.changeStyleListItem(event);
  };

  changeStyleListItem = (event) => {
    console.log(`${this.state.random} ${ event._targetInst.key - 1} `)
   
    if(this.state.random === event._targetInst.key){
      
      event.target.firstChild.classList.add('success');
    }
    
    
  }  

  render() {

    const { random } = this.state;
    return (
    <div>
      <Header />
      <ItemList />
      <RandomBird 
        level={0}
        random={random}
        />    
      <div className="row mb-2">
        <div className="col-md-6">
          <BirdList 
            onItemSelected={this.onBirdSelected}
            level={0}/>
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

