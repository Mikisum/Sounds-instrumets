import React, { Component } from 'react';
import winImage from '../../assets/images/win.jpg';
import loseImage from '../../assets/images/play-next.jpg';
import './finalPage.css';
export default class FinalPage extends Component {

  render() {
    const {score, showNewGame} = this.props;
    if(score !== 30) {
      return (
      <div className="card text-center mx-auto mt-5">
        <div className="card-body">
          <h1>Неплохо!</h1>
          <img className="card-image win-image" src={loseImage} alt="lose"></img>
          <h3 className="m-5">Вы набрали {score} из 30 возможных баллов!</h3>
            <button 
              type="button"  
              className="btn btn-secondary next btn-block"
              onClick={showNewGame}>Попробовать еще раз
            </button>
        </div>
      </div>
     )
    } else {
      return (
        <div className="card text-center mx-auto mt-5">
        <div className="card-body">
          <h1 className="card-title">Поздравляем!</h1>
          <img className="card-image win-image" src={winImage} alt="win"></img>
          <h3 className="card-text m-5">Вы набрали максимальное колличество баллов!</h3>
            <button 
              type="button"  
              className="btn btn-secondary next btn-block"
              onClick={showNewGame}>Вернуться
            </button>
        </div>
      </div>
      )
    }
  }
}