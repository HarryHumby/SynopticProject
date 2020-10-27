import React, { Component } from 'react';
import '../styles/components/DisplayScreen.css';

export default class DisplayScreen extends Component {

  constructor(props) {
    super(props);

    this.handleLibraryClickEventFunction = this.handleLibraryClickEventFunction.bind(this);
    this.handlePlaylistListClickEventFunction = this.handlePlaylistListClickEventFunction.bind(this);
  }

  handleLibraryClickEventFunction(event) {
    this.props.switchToPlaylistView([this.props.audioFiles[event.target.id]]);
  }

  handlePlaylistListClickEventFunction(event) {
    this.props.switchToPlaylistView(this.props.playlists[event.target.id].collection);
  }

  render() {
    let playListPosition;

    if (this.props.playlistSize > 1) {
      playListPosition = <p className="playlist-position">{this.props.playlistPosition} / {this.props.playlistSize}</p>
    }

    switch (this.props.view) {
      case "home": 
        return (<div className="display-screen">
          <button className="all-songs" title="All Songs" onClick={this.props.switchToLibraryView}><i className="fa fa-music"></i> All Songs</button>
          <button className="my-playlists" title="My Playlists" onClick={this.props.switchToPlaylistListView}><i className="fa fa-list"></i> My Playlists</button>
          </div>)
      case "library": 
        return (<div className="display-screen">
         {this.props.audioFiles.map((audioFile, i) => {
          return <div id={i} className="library-audio-file" style={{backgroundImage: `url(${audioFile.image})`}} onClick={this.handleLibraryClickEventFunction}>
            <h1 className="song-title">{audioFile.title}</h1>
          </div>
        })}
         </div>)
      case "playlist-list": 
      return (<div className="display-screen">
      {this.props.playlists.map((playlist, i) => {
       return <button id={i} className="playlist-list-icon" onClick={this.props.switchToPlaylistView} onClick={this.handlePlaylistListClickEventFunction}>
         <h1 className="playlist-title">{playlist.title}</h1>
       </button>
     })}
      </div>)
      case "playlist": 
        return (<div className="display-screen">
          <h1 className="song-title">{this.props.selection.title}</h1>
          <h3 className="song-artist">{this.props.selection.artist}</h3>
          <img className="song-image" src={this.props.selection.image}/>
          {playListPosition}
          </div>)
    }
  }
}