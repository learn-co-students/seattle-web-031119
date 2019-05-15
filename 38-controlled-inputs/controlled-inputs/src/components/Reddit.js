import React, { Component } from 'react';

import SubredditSelector from './SubredditSelector'
import RedditPosts from './RedditPosts'

class Reddit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSubreddit: 'all',
      posts: []
    }

    this.loadSubreddit()

    this.setSubreddit = this.setSubreddit.bind(this)
  }

  setSubreddit(subreddit) {
    this.setState({currentSubreddit: subreddit}, () => {
      this.loadSubreddit()
    })
  }

  loadSubreddit() {
    fetch('https://www.reddit.com/r/' + this.state.currentSubreddit + '/.json')
    .then(res => res.json())
    .then(posts => {
      posts = posts.data.children
      console.log(posts)
      this.setState({posts})
    })
  }

  render() { 
    return <div>
      <h1>Reddit</h1>
      <SubredditSelector setSubreddit={this.setSubreddit} />
      <p>Currently browsing /r/{this.state.currentSubreddit}</p>
      <RedditPosts posts={this.state.posts} />
    </div>
  }
}
 
export default Reddit