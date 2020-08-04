import React from 'react';

import Header from '../header';
import ItemList from '../item-list';
import RandomBird from '../random-bird';
import BirdList from '../bird-list';
import BirdDetails from '../bird-details';
import RoundButton from '../round-button';

const App = () => {

  return (
    <div>
      <Header />
      <ItemList />
      <RandomBird />
      <div className="row mb-2">
        <div className="col-sm-6">
          <BirdList />
        </div>
        <div className="col-sm-6">
          <BirdDetails />
        </div>
      </div>
      <RoundButton />
    </div>
  );
};

export default App;
