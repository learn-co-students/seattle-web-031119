import React, { Component } from 'react';
import Showtimes from './Showtimes';

class JohnWick extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div>
      <h1>John Wick</h1>
      <p>The movie where it all started. Dog dies. Then everyone else does.</p>
      <Showtimes path={this.props.match.path} />
    </div>
  }
}
 
export default JohnWick;