import React, { Component } from 'react';


export default class FinalPage extends Component {

  render() {
    const {score, showNewGame} = this.props;
    if(score !== 30) {
      return (
      <div className="card text-center mx-auto mt-5 w-50">
        <div className="card-body">
          <p>Вы набрали {score} из 30 баллов</p>
            <button 
              type="button"  
              className="btn btn-secondary"
              onClick={showNewGame}>Попробовать еще раз
            </button>
        </div>
      </div>
     )
    } else {
      return (
        <div className="card text-center mx-auto mt-5 w-50">
        <div className="card-body">
          <h3 className="card-title">Поздравляем!</h3>
          <p className="card-text">Вы набрали максимальное колличество баллов!</p>
            <button 
              type="button"  
              className="btn btn-secondary"
              onClick={showNewGame}>Вернуться
            </button>
        </div>
      </div>
      )
    }
  }
}