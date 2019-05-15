import React, { Component } from 'react';

class SubredditSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let subreddit = ev.target.elements['subreddit'].value
    this.props.setSubreddit(subreddit)
  }

  render() { 
    return <div>
      <form onSubmit={this.handleSubmit}>
        /r/<input name="subreddit" type="text" placeholder="all"></input>
        <input type="submit" value="load subreddit"></input>
      </form>
    </div>
  }
}
 
export default SubredditSelector