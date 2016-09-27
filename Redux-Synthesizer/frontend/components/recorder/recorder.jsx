import React from 'react';

export default class Recorder extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.props.isRecording) {
      this.props.stopRecording();
    } else {
      this.props.startRecording();
    }
  }
  render() {

      if (this.props.isRecording){
        return (
          <div>
            <button onClick={this.handleClick} disabled>Start</button>
            <button onClick={this.handleClick} >Stop</button>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.handleClick}>Start</button>
            <button onClick={this.handleClick} disabled>Stop</button>
          </div>
        );
      }
  }

}
