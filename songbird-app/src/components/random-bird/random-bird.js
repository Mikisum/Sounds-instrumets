import React, { Component } from 'react';
import Player from '../audio-player';



import './random-bird.css';

import birdsData from '../services/birds';

export default class RandomBird extends Component {

  state = {
    name: '*****',
    image: null,
    audio: null
  }

  componentDidMount() {
    this.updateBird();
  }

  updateBird() {
    
    this.setState({
      // name: birdsData[0][1].name,
      // audio: birdsData[0][1].audio,
      // image: birdsData[0][1].image
    }) 
  }

  render() {
    // const { name, image, audio } = this.state;
    const { level, random} = this.props;
    return (
      <div className="my-2 card">
        <div className="row no-gutters">
          <div className="col-md-4 p-3">
            <img className="bird-image card-img" alt="bird" 
              src={birdsData[level][random].image}></img>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{birdsData[level][random].name}</h1>
              <div><Player src={birdsData[level][random].audio}/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}