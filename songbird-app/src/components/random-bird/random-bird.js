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
      className="player py-2"
      layout="stacked"
      showJumpControls={false}
      customProgressBarSection={[RHAP_UI.VOLUME_CONTROLS, RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR]}
      customControlsSection={[RHAP_UI.CURRENT_TIME,  RHAP_UI.DURATION]}
      autoPlayAfterSrcChange={false}
    />
  )

  render() {
    
    const { level, random, isRightAnswer} = this.props;
    console.log(`Правильный ответ - ${birdsData[level][random].name}`);
    return (
      <div className="bird-container my-3 card p-3">
        <div className="row">
          <div className="image-container col-lg-3 col-md-4 col-sm-6">
            <img className="bird-image card-img" alt="bird" 
              src={isRightAnswer ? birdsData[level][random].image : defaultBird}></img>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-6">
            <div className="card-body p-0">
              <h3 className="card-title m-0">{isRightAnswer ? birdsData[level][random].name: '*****'}</h3>
              <div className="audio-player">{this.createAudioPlayer(birdsData[level][random].audio)}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}