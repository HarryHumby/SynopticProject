import React, { Component } from 'react';
import MainButtons from '../components/MainButtons';
import DisplayScreen from '../components/DisplayScreen';
import Playlists from '../services/Playlists';

export default class PlaylistListView extends Component {
  
  constructor(props) {
    super(props);

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

  render() {
    return (<div className="playlist-list-view">
      <DisplayScreen view={"playlist-list"} playlists={this.state.playlists} switchToPlaylistView={this.props.switchToPlaylistView}/>
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}