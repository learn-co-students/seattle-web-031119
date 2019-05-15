import React from 'react';
import logo from './logo.svg';
import './App.css';

import Uncontrolled from './components/n00-uncontrolled';
import UncontrolledByOrder from './components/n01-uncontrolled-by-order';
import UncontrolledWithName from './components/n02-uncontrolled-with-name';
import UncontrolledWithRef from './components/n03-uncontrolled-with-ref';
import Controlled from './components/n04-controlled';
import ControlledMulti from './components/n05-controlled';
import ControlledMultiOneHandler from './components/n06-controlled-one-handler';
import Reddit from './components/Reddit';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Reddit />

        <h3>Uncontrolled Inputs</h3>
        <Uncontrolled />
        <UncontrolledByOrder />
        <UncontrolledWithName />
        <UncontrolledWithRef />

        <h3>Controlled Inputs</h3>
        <Controlled />
        <ControlledMulti />
        <ControlledMultiOneHandler />
      </header>
    </div>
  );
}

export default App;
