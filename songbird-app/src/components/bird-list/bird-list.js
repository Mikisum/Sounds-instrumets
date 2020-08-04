import React, { Component } from 'react';

import './bird-list.css';
import birdsData from '../services/birds';
import BirdListItem from '../bird-list-item';

export default class BirdList extends Component {

  // state = {
  //   name: null
  // };

  // birds = [];

  // constructor() {
  //   super();
  //   this.updateName();
  // }
  
  // updateName() {
  //   birdsData[0].forEach((obj) => {
  //     console.log(obj.name);
  //    this.birds.push({name: obj.name});
  //   });
  // }
  
  birdItems = birdsData[0].map((item) => {
   
    return (
      <li key={ item.name } className="list-group-item list-group-item-action">
        <BirdListItem label={item.name}/></li>
    )
  }) 
  render() {
    return (
      <ul className="list-group">
        { birdItems }
      </ul>
    );
  }
  
}

