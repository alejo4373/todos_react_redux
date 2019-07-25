import React, { Component } from 'react';

class JournalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <div>
        <h2>Journal </h2>
      </div>
    )
  }
}

export default JournalContainer
