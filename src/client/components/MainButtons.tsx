import React, { Component } from 'react';
import '../styles/components/MainButtons.css';

export default class MainButtons extends Component {
  render() {
    return (<div className="main-button-holder">
      <button className="previous-button" title="Previous" onClick={this.props.previousSong}><i className="fa fa-step-backward"></i></button>
  <button className="pause-play-button" title="Pause/Play" onClick={this.props.pausePlaySong}>{this.props.playing ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}</button>
      <button className="next-button" title="Next" onClick={this.props.nextSong}><i className="fa fa-step-forward"></i></button>
      <button className="shuffle-button" title="Shuffle" onClick={this.props.randomSong}><i className="fa fa-random"></i></button>
      </div>
    );
  }
}