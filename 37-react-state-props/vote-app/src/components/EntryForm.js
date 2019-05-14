import React, {Component} from 'react'

class EntryForm extends Component {
  constructor() {
    super()
    this.state = {
      input: 'popcorn',
      maxLength: 30  
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(ev) {
    let input = ev.target.value
    if (input.length <= this.state.maxLength) {
      this.setState({input})
    }
  }

  render() {
    return <div>
      <form>
        {this.state.input.length}/{this.state.maxLength}
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    </div>
  }
}

export default EntryForm