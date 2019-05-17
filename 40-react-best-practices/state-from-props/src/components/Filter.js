import React, { Component } from 'react'

class Filter extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    this.props.setFilter(ev.target.value)
  }

  render() { 
    return <div>
      <form>
        <input type="text" onChange={this.handleChange} />
      </form>
    </div>
  }
}
 
export default Filter;