import React, { Component } from 'react';

import './random-bird.css';

export default class RandomBird extends Component {
  render() {
    return (
      <div className="d-flex mb-2">
        <div className="pt-2 pr-2">
          <img className="bird-image" alt="bird" 
            src="https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png"></img>
        </div>
        <div>
          <div className="pt-2">
            ******
          </div>
          <hr></hr>
          <div>
            audio
          </div>
        </div>
      </div>
    )
  }
}