import React, { Component } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import defaultBird from '../../assets/images/default-bird.jpg';

import './random-bird.css';

import birdsData from '../services/birds';

const player = React.createRef();

export default class RandomBird extends Component {

  componentDidUpdate(prevProps) {
    if( prevProps.isRightAnswer !== this.props.isRightAnswer) {
      player.current.audio.current.pause();
    }
  }

  createAudioPlayer = (audio) => (
    <AudioPlayer
      ref={player}
      src={audio}
      className="player"
      layout="horizontal-reverse"
      showJumpControls={false}
      customControlsSection={
        [RHAP_UI.MAIN_CONTROLS, RHAP_UI.VOLUME_CONTROLS]
      }
      autoPlayAfterSrcChange={false}
    />
  )

  render() {
    
    const { level, random, isRightAnswer} = this.props;
    console.log(`Правильный ответ - ${birdsData[level][random].name}`);
    return (
      <div className="my-2 card">
        <div className="row no-gutters">
          <div className="col-md-4 p-3">
            <img className="bird-image card-img" alt="bird" 
              src={isRightAnswer ? birdsData[level][random].image : defaultBird}></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{isRightAnswer ? birdsData[level][random].name: '*****'}</h1>
              <div className="audio-player">{this.createAudioPlayer(birdsData[level][random].audio)}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}