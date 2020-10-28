import React, { Component } from 'react';
import MainButtons from '../components/MainButtons';
import DisplayScreen from '../components/DisplayScreen';
import Playlists from '../services/Playlists';

export default class PlaylistListView extends Component {
  
  constructor(props) {
    super(props);
    
    this.handlePlaylistListClickEventFunction = this.handlePlaylistListClickEventFunction.bind(this);
    
    this.state = {
      playlists: []
    }
  }

  componentDidMount() {
    Playlists.listMusic()
      .then((playlists) => {
        this.setState({
          playlists: playlists
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handlePlaylistListClickEventFunction(event) {
    this.props.switchToPlaylistView(this.state.playlists[event.target.id].collection);
  }

  render() {
    let displayScreenRender, centreContentOnDisplay = false;

    if (this.state.playlists && this.state.playlists.length && this.state.playlists[0]) {
      displayScreenRender = this.state.playlists.map((playlist, i) => {
        return <div id={i} className="playlist-list-icon" onClick={this.props.switchToPlaylistView} onClick={this.handlePlaylistListClickEventFunction}>
          <h1 className="playlist-title">{playlist.title}</h1>
        </div>
      })
    } else {
      displayScreenRender = <h1 className="no-songs-found">No playlists found.</h1>
      centreContentOnDisplay = true;
    }

    return (<div className="playlist-list-view">
      <DisplayScreen renderView={displayScreenRender} centreContentOnDisplay={centreContentOnDisplay} />
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}