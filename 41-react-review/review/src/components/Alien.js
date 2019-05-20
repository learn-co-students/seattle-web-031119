import React, { Component } from 'react';

class Alien extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() { 
    return <div onClick={() => this.props.editAlien(this.props.alien)}>
      <h1>{this.props.alien.species}</h1>
      <p>{this.props.alien.homeplanet}</p>
      <div>
        <img src={this.props.alien.image_url} />
      </div>
    </div>
  }
}
 
export default Alien;