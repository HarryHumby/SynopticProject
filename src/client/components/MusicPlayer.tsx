import React, { Component } from 'react';
import ReactPlayer from 'react-player';

export default class MusicPlayer extends Component {
  render() {
    return (<ReactPlayer url={`../../resources/${this.props.selection._id}.mp3`}
    width={0}
    height={0}
    playing={this.props.playing} 
    onEnded={this.props.nextSong}
    />
    );
  }
}