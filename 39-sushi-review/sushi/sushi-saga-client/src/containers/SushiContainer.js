import React, { Component, Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi';

class SushiContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      startIndex: 0
    }

    this.more = this.more.bind(this)
  }

  fourSushis() {
    if (this.props.sushis.length < 4) {
      return []
    }
    let four = [
      this.props.sushis[this.state.startIndex + 0],
      this.props.sushis[this.state.startIndex + 1],
      this.props.sushis[this.state.startIndex + 2],
      this.props.sushis[this.state.startIndex + 3],
    ]
    return four
  }

  more() {
    this.setState({startIndex: this.state.startIndex + 4})
  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.fourSushis().map(sushi => {
            return <Sushi
              key={sushi.id}
              sushi={sushi}
              isEaten={this.props.isEaten}
              eatSushi={this.props.eatSushi}
            />
          })}
          <MoreButton onClick={this.more} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer