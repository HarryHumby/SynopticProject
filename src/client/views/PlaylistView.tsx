import React, { Component } from 'react';
import MainButtons from '../components/MainButtons';
import DisplayScreen from '../components/DisplayScreen';
import MusicPlayer from '../components/MusicPlayer';

export default class PlaylistView extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      playlist: this.props.playlist,
      position: 0,
      playing: false
    }
  }

  nextSong = () => {
    let currentPosition = this.state.position, newPosition;
    
    // this conditional ensures that the next button, when at the end of a playlist, loops to the beginning
    if (currentPosition === this.state.playlist.length - 1) {
      newPosition = 0;
    } else {
      newPosition = ++currentPosition;
    }

    this.setState({
      position: newPosition
    })
  }

  previousSong = () => {
    let currentPosition = this.state.position, newPosition;
    
    // this conditional ensures that the previous button, when at the start of a playlist, loops to the end
    if (currentPosition === 0) {
      newPosition =  this.state.playlist.length - 1;
    } else {
      newPosition = --currentPosition;
    }

    this.setState({
      position: newPosition
    })
  }

  randomSong = () => {
    let currentPosition = this.state.position, newPosition;

    // this loop ensures that the random song is not the current song
    do {
      newPosition =  Math.floor(Math.random()*this.state.playlist.length)
    } while (newPosition === currentPosition);

    this.setState({
      position: newPosition
    })
  }

  pausePlaySong = () => {
    let currentlyPlaying = this.state.playing;
    this.setState({
      playing: !currentlyPlaying
    })
  }

  render() {
    return (<div className="playlist-view">
      <DisplayScreen view={"playlist"} selection={this.state.playlist[this.state.position]} playlistPosition={this.state.position + 1} playlistSize={this.state.playlist.length}/>
      <MainButtons nextSong={this.nextSong} previousSong={this.previousSong} randomSong={this.randomSong} pausePlaySong={this.pausePlaySong} playing={this.state.playing} switchToHomeView={this.props.switchToHomeView} playlistSize={this.state.playlist.length}/>
      <MusicPlayer selection={this.state.playlist[this.state.position]} nextSong={this.nextSong} playing={this.state.playing}/>
      </div>
    );
  }
}
