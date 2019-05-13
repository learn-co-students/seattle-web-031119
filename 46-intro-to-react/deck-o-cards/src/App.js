import React from 'react';
import './App.css';

// import MyComponent from './components/MyComponent'
// import Adder from './components/Adder'
// import Person from './components/Person'
import NumberList from './components/NumberList'
import ScratchTicket from './components/ScratchTicket'
import Card from './components/Card'

function App() {
  return (
    <div className="App App-header">
      <Card face='A' suit='hearts' />
      <Card face='8' suit='diamonds' />
      <Card face='2' suit='clubs' />
      <Card face='7' suit='hearts' />
      <Card face='K' suit='spades' />

      <ScratchTicket />
      <ScratchTicket />
      <ScratchTicket />
      <ScratchTicket />
      <ScratchTicket />
      <ScratchTicket />
      <ScratchTicket />
      <ScratchTicket />
      <ScratchTicket />
      <NumberList />
    </div>
  );
}

export default App;
