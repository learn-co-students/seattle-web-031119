import React, { Component } from 'react';
import Alien from './Alien';

class AlienList extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div>
      {this.props.aliens.map(alien => {
        return <Alien key={alien.id} alien={alien} editAlien={this.props.editAlien} />
      })}
    </div>
  }
}
 
export default AlienList;