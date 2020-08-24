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

    if(!this.state.bird) {
      return (
      <div className="bird-details">
        Послушайте плеер. Выберите птицу из списка
      </div>
      )
    }
  
    const {bird: { name, species, description, audio, image} } = this.state; 
    return (
      <div className="bird-details card p-3">
        <div  className="row no-gutters">
          <div className="">
            <img className="bird-image card-img"
              src={ image }
              alt="bird"/>
          </div>
          <div className="card-body ">
            <h4>{name}{this.props.birdName}</h4>
            <div>
              <span className="latinName">{species}</span>
            </div> 
          </div>  
        </div>
        <div className="py-2">
          <Player src={audio}/>
        </div>
        <div>
          <span>{description}</span>
        </div>
      </div>
    )
  }
}