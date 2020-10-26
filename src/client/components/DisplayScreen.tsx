import React, { Component } from 'react';
import '../styles/components/DisplayScreen.css';

export default class DisplayScreen extends Component {

  render() {
    return (<div className="display-screen">
        <h1 className="song-title">{this.props.selection.title}</h1>
        <h3 className="song-artist">{this.props.selection.artist}</h3>
        <img className="song-image" src={this.props.selection.image}/>
        <p className="playlist-position">{this.props.playlistPosition} / {this.props.playlistSize}</p>
      </div>
    );
  }
}