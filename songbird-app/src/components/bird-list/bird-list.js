import React, {Component} from 'react';

import './bird-list.css';

export default class BirdList extends Component {

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">Ворон</li>
        <li className="list-group-item">Журавль</li>
        <li className="list-group-item">Ласточка</li>
        <li className="list-group-item">Козодой</li>
        <li className="list-group-item">Кукушка</li>
        <li className="list-group-item">Синица</li>
      </ul>
    );
  }
}
