import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/john-wick">John Wick</Link></li>
        <li><Link to="/john-wick-2">John Wick 2</Link></li>
        <li><Link to="/john-wick-3">John Wick 3</Link></li>
      </ul>
    </div>
  }
}
 
export default Navbar;