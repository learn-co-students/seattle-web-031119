import React, { Component } from 'react';
import Displayer from './Displayer'
import Filter from './Filter'

class Fetcher extends Component {
  constructor(props) {
    super(props);
    this.results = []
    this.state = {
      filteredResults: [],
      filter: ''
    }

    fetch('https://www.reddit.com/.json')
    .then(res => res.json())
    .then(json => {
      let posts = json.data.children.map(obj => obj.data)
      console.log({posts})
      this.results = posts
      this.setState({
        filteredResults: posts
      })
    })

    this.setFilter = this.setFilter.bind(this)
  }

  setFilter(filter) {
    this.setState({filter})
  }

  filteredResults() {
    return this.results.filter(result => {
      return result.title.toLowerCase().includes(this.state.filter.toLowerCase())
    })
  }

  render() { 
    return <div>
      <Filter setFilter={this.setFilter} />
      <Displayer results={this.filteredResults()} />
    </div>
  }
}
 
export default Fetcher;