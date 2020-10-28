import React, { Component } from 'react';
import '../styles/components/MainButtons.css';

export default class MainButtons extends Component {
  render() {
    let shuffleButtonDisable = true, playListButtonDisable = true;

    if (this.props.playlistSize > 1) {
      shuffleButtonDisable =  this.props.disabled;
      playListButtonDisable =  this.props.disabled;
    }

    return (<div className="main-button-holder">
      <button disabled={playListButtonDisable} className="previous-button" title="Previous" onClick={this.props.previousSong}><i className="fa fa-step-backward"></i></button>
      <button disabled={this.props.disabled} className="pause-play-button" title="Pause/Play" onClick={this.props.pausePlaySong}>{this.props.playing ? <i className="fa fa-pause"></i> : <i className="fa fa-play"></i>}</button>
      <button disabled={playListButtonDisable} className="next-button" title="Next" onClick={this.props.nextSong}><i className="fa fa-step-forward"></i></button>
      <button disabled={shuffleButtonDisable} className="shuffle-button" title="Shuffle" onClick={this.props.randomSong}><i className="fa fa-random"></i></button>
      <button className="home-button" title="Home" onClick={this.props.switchToHomeView}><i className="fa fa-home"></i></button>
      </div>
    );
  }
}