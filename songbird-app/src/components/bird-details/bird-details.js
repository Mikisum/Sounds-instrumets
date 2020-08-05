import React, { Component } from 'react';
import birdsData from '../services/birds';
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
    const { birdId } =  this.props;
    console.log(birdId);
    if (!birdId) {
      return;
    }

    this.setState({ bird: {
      id: birdsData[0][birdId-1],
      name: birdsData[0][birdId-1].name,
      species: birdsData[0][birdId-1].species,
      description: birdsData[0][birdId-1].description
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
  
    const {bird: {id, name, species, description} } = this.state; 
    return (
      <div className="bird-details card">
        <img className="bird-image"
          src={`https://cdn.the-scientist.com/assets/articleNo/66820/hImg/34886/bird-banner3-l.png`}
          alt="bird"/>
        <div className="card-body">
          <h4>{name}{this.props.birdName}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="latinName">{species}</span>
            </li>
            <li className="list-group-item">
              плеер
            </li>
            <li className="list-group-item">
              <span>{description}</span>
            </li>
          </ul>
          </div>  

      </div>
    )
  }
}