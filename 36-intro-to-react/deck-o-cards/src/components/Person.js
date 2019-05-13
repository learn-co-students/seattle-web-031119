import React, {Component} from 'react'

class Person extends Component {
  render() {
    return <div>
      <p>Name: {this.props.name}</p>
      <p>Age: {this.props.age}</p>
      <p>Occupation: {this.props.occupation}</p>
    </div>
  }
}

export default Person