import React, { Component } from 'react';
import Player from '../audio-player';



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
      <div className="my-2 card">
        <div className="row no-gutters">
          <div className="col-md-4 p-3">
            <img className="bird-image card-img" alt="bird" 
              src="https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png"></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{name}</h1>
              <div><Player /></div>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}