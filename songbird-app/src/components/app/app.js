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
    isRightAnswer: false,
    score: 0,
    try: 0,
    isSelected: false
  };

  componentDidMount() {
    this.setState({
      random: this.getRandomBird()
    });
  }

  getRandomBird = () => {
    return Math.floor(Math.random() * 6);
  }

  onBirdSelected = (id, event) => {
    event.persist();
    this.setState({
      selectedBird: id,
      isSelected: true
    });
    if(!event.target.firstChild.classList.contains('success') && !event.target.firstChild.classList.contains('error')) {
      this.setState((prevState) => ({
        try: prevState.try + 1
      }));
    }
    this.checkAnswer(id);
    this.changeStyleListItem(event);
  };

  checkAnswer = (selectedBird) => {
    if(this.state.isRightAnswer) return;
    if(selectedBird - 1 === this.state.random) {
      //setSuccessAudio
      this.setState((prevState) => ({
        score: prevState.score + 5 - this.state.try,
        isRightAnswer: true
      }));
    }
  } 

  changeStyleListItem = (event) => {
    console.log(`${this.state.random} ${ event._targetInst.key - 1} `)
    if(this.state.random === event._targetInst.key - 1 && !this.state.isRightAnswer){
      event.target.firstChild.classList.add('success');
    } else if (this.state.random !== event._targetInst.key - 1 && !this.state.isRightAnswer) {
      event.target.firstChild.classList.add('error');
    }
  } 
  
  clearPreviousResults = () => {
  
  }

  getNextPage = () => {
    if (!this.state.isRightAnswer) return;
    if(this.state.level === 5) {
      this.setState({
        level: 0
      })
    }
    this.setState((prevState) => ({
      level: prevState.level + 1,
      random: this.getRandomBird(),
      isRightAnswer: false,
      try: 0,
      isSelected: false
    }));
  }


  render() {

    const { random, level, score } = this.state;
    return (
    <div>
      <Header score={score}/>
      <ItemList />
      <RandomBird 
        level={level}
        random={random}
        />    
      <div className="row mb-2">
        <div className="col-md-6">
          <BirdList 
            onItemSelected={this.onBirdSelected}
            level={level}/>
        </div>
        <div className="col-md-6">
          <BirdDetails birdId={this.state.selectedBird}/>
        </div>
      </div>
      <RoundButton isButtonClicked={this.getNextPage} />
    </div>
    );
  }
  
};

