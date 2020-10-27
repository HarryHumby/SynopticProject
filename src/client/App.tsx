import React, { Component } from 'react';
import PlaylistListView from './views/PlaylistListView';
import PlaylistView from './views/PlaylistView';
import LibraryView from './views/LibraryView';
import HomeView from './views/HomeView';
import './styles/app.css';

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      view: <HomeView switchToPlaylistListView={this.switchToPlaylistListView} switchToLibraryView={this.switchToLibraryView} switchToHomeView={this.switchToHomeView}/>
    }
  }

  switchToHomeView = () => {
    this.setState({
      view: <HomeView switchToPlaylistListView={this.switchToPlaylistListView} switchToLibraryView={this.switchToLibraryView} switchToHomeView={this.switchToHomeView}/>
    })
  }

  switchToPlaylistListView = () => {
    this.setState({
      view: <PlaylistListView switchToPlaylistView={this.switchToPlaylistView} switchToHomeView={this.switchToHomeView}/>
    })
  }

  switchToPlaylistView = (playlist) => {
    this.setState({
      view: <PlaylistView switchToHomeView={this.switchToHomeView} playlist = {playlist}/>
    })
  }

  switchToLibraryView = () => {
    this.setState({
      view: <LibraryView switchToHomeView={this.switchToHomeView} switchToPlaylistView={this.switchToPlaylistView}/>
    })
  }

  render() {
      return (<div className="app">
      {this.state.view}
      </div>
    );
  }
}
