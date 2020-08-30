import React, { Component } from 'react';

import Header from '../header';
import ItemList from '../item-list';
import RandomBird from '../random-bird';
import BirdList from '../bird-list';
import BirdDetails from '../bird-details';
import RoundButton from '../round-button';
import FinalPage from '../finalPage';
import successAudio from '../../assets/audio/correct.mp3';
import errorAudio from '../../assets/audio/error.mp3'

import './app.css';

export default class App extends Component {

  state = {
    selectedBird: null,
    level: 0,
    random:0,
    isRightAnswer: false,
    score: 0,
    try: 0,
    isSelected: false,
    gameOver: false
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

  setAudio = (isRightAnswer) => {
    const successAudio = document.getElementById('successAudio');
    const errorAudio= document.getElementById('errorAudio');
    if(isRightAnswer) {
      successAudio.play();
    } else {
      errorAudio.play();
    }
  }

  checkAnswer = (selectedBird) => {
    if(this.state.isRightAnswer) return;
    if(selectedBird - 1 === this.state.random) {
      this.setAudio(true);
      this.setState((prevState) => ({
        score: prevState.score + 5 - this.state.try,
        isRightAnswer: true
      }));
    } else {
      this.setAudio(false);
    }
  } 

  changeStyleListItem = (event) => {
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
        level: -1,
        gameOver: true
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

  showNewGame = () => {
    this.setState({
      score: 0,
      gameOver: false
    });
  }


  render() {

    const { random, level, score, gameOver, isRightAnswer, isSelected } = this.state;
    if (gameOver) {
      return (
        <div>
          <Header 
            score={score}/>
          <ItemList level={level}/>  
          <FinalPage 
            score={score}
            showNewGame={this.showNewGame} />
        </div>
      )
    }
    return (
    <div>
      <Header score={score}/>
      <ItemList level={level}/>
      <RandomBird 
        level={level}
        random={random}
        isRightAnswer={isRightAnswer}
        />    
      <div className="row mb-2">
        <div className="col-md-6">
          <BirdList 
            onItemSelected={this.onBirdSelected}
            level={level}
            isRightAnswer={isRightAnswer}/>
        </div>
        <div className="col-md-6">
          <BirdDetails
            birdId={this.state.selectedBird}
            level={level}
            isSelected={isSelected}/>
        </div>
      </div>
      <RoundButton 
        isRightAnswer={isRightAnswer}
        isButtonClicked={this.getNextPage} />
      <audio src={successAudio} id="successAudio"></audio>
      <audio src={errorAudio} id="errorAudio"></audio>
    </div>
    );
  }
  
};

