import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

class DailyShowtimes extends Component {
  render() {
    return <div>
      {this.props.day}
      {this.props.showtimes[this.props.day].map((showtime, index) => {
        return <div key={index}>{showtime}</div>
      })}
    </div>
  }
}

class Showtimes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'Monday': ['4:10pm', '7:20pm', '8:30pm', '9:40pm'],
      'Tuesday': ['3:10pm', '6:20pm', '9:30pm']
    }
  }
  render() { 
    return <div>
      <h3>Showtimes {this.props.path}</h3>
      <Link to={`${this.props.path}/monday`}>Monday</Link>
      <Link to={`${this.props.path}/tuesday`}>Tuesday</Link>
      <Route path={`${this.props.path}/monday`} component={() => <DailyShowtimes day="Monday" showtimes={this.state} />} />
      <Route path={`${this.props.path}/tuesday`} component={() => <DailyShowtimes day="Tuesday" showtimes={this.state} />} />
    </div>
  }
}
 
export default Showtimes;