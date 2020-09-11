import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ''
    };
  }
    handleTweetChange = e => {
      this.setState(
        {
        tweet: e.target.value
        }
      )
    }
  render() {
    let characters = this.props.maxChars -this.state.tweet.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleTweetChange(event)} value={this.state.tweet} name="message" id="message" />
        {characters}
      </div>
    );
  }
}

export default TwitterMessage;
