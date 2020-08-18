import React, { Component } from 'react';

import './item-list.css';

export default class ItemList extends Component {

  componentDidUpdate() {
    const li = document.querySelectorAll('li');
    li.forEach((el, index) => {
      el.classList.remove('active');
      if(index === this.props.level) {
        el.classList.add('active');
      }
    })
  }

  render() {
    return (
      <ul className=" d-flex flex-wrap justify-content-center p-0">
        <li className="item flex-fill list-group-item list-group-item-action active">Разминка</li>
        <li className="item flex-fill  list-group-item list-group-item-action">Воробьиные</li>
        <li className="item flex-fill  list-group-item list-group-item-action">Лесные птицы</li>
        <li className="item flex-fill  list-group-item list-group-item-action">Певчие птицы</li>
        <li className="item flex-fill  list-group-item list-group-item-action">Хищные птицы</li>
        <li className="item flex-fill  list-group-item list-group-item-action">Морские птицы</li>
      </ul>
    )
  }
}