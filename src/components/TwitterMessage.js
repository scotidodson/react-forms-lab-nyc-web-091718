import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      charsRemaining: 140
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value,
      charsRemaining: (140 - event.target.value.length)
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
        <p> Remaining Characters: {this.state.charsRemaining} </p>
      </div>
    );
  }
}

export default TwitterMessage;
