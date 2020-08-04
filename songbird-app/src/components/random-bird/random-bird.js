import React, { Component } from 'react';

import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


import './random-bird.css';

import birdsData from '../services/birds';

export default class RandomBird extends Component {

  state = {
    name: '*****',
  }

  constructor() {
    super();
    this.updateBird();
  }

  updateBird() {
    console.log(birdsData);
    // birdsData.forEach((el) => {
    //   el.forEach((obj) => {
    //     console.log(obj.name);
    //   })
    // })
    // this.xenoCantoService.getBirdVoice()
    //   .then((data) => {
    //     this.setState({
    //       name: data.recordings 
    //     })
    //   })
  }

  render() {
    const { name } = this.state;
    return (
      <div className="row mb-2">
        <div className="col-sm my-2 align-items-center">
          <img className="bird-image" alt="bird" 
            src="https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png"></img>
        </div>
        <div className="col-sm">
          <div className="pt-2">
            {name}
          </div>
          <hr></hr>
          <div>
            <AudioPlayer
              className="player"
              autoPlay
              src="https://www.xeno-canto.org/api/2/recordings?query=Ворон"
              onPlay={e => console.log("onPlay")}
              showJumpControls=""
              layout="horizontal-reverse"
            />
          </div>
        </div>
      </div>
    )
  }

  getBirdVoice() {
    fetch('https://www.xeno-canto.org/api/2/recordings?query=Ворон')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }
  
  
}