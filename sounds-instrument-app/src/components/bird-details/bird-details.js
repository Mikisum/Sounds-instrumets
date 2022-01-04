import React, { Component } from 'react';
import birdsData from '../services/birds';
import Player from '../audio-player';
import './bird-details.css';

export default class BirdDetails extends Component {

  state = {
    bird: null
  };

  componentDidMount() {
    this.updateBird();
  }

  componentDidUpdate(prevProps) {
    if (this.props.birdId !== prevProps.birdId) {
      this.updateBird();
    }
  }

  updateBird() {
    const { birdId, level } =  this.props;
    if (!birdId) {
      return;
    }

    this.setState({ bird: {
      id: birdsData[level][birdId-1],
      name: birdsData[level][birdId-1].name,
      species: birdsData[level][birdId-1].species,
      description: birdsData[level][birdId-1].description,
      audio: birdsData[level][birdId-1].audio,
      image: birdsData[level][birdId-1].image
    } });
  }

  render() {
    const { isSelected } = this.props;

    if(!this.state.bird || !isSelected ) {
      return (
      <div className="bird-details">
        Послушайте плеер. Выберите инструмент из списка
      </div>
      )
    }
  
    const {bird: { name, species, description, audio, image} } = this.state; 
    return (
      <div className="details card p-3">
        <div className="row">
          <div className="image-container col-lg-6">
            <img className="bird-image card-img"
              src={ image }
              alt="bird"/>
          </div>
          <div className="name-container col-lg-6">
            <h4>{name}{this.props.birdName}</h4>
            <div className="latinName">
              <span>{species}</span>
            </div> 
            <div className="py-2">
              <Player src={audio}/>
            </div>
          </div>  
        </div>
        <div>
          <span>{description}</span>
        </div>
      </div>
    )
  }
}