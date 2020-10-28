import React, { Component } from 'react';
import PlaylistListView from './views/PlaylistListView';
import PlaylistView from './views/PlaylistView';
import LibraryView from './views/LibraryView';
import HomeView from './views/HomeView';
import SearchView from './views/SearchView';
import './styles/app.css';

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      view: <HomeView switchToPlaylistListView={this.switchToPlaylistListView} switchToLibraryView={this.switchToLibraryView} switchToHomeView={this.switchToHomeView} switchToSearchView={this.switchToSearchView}/>
    }
  }

  switchToHomeView = () => {
    this.setState({
      view: <HomeView switchToPlaylistListView={this.switchToPlaylistListView} switchToLibraryView={this.switchToLibraryView} switchToHomeView={this.switchToHomeView} switchToSearchView={this.switchToSearchView}/>
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

  switchToLibraryView = (search = "") => {
    this.setState({
      view: <LibraryView search={search} switchToHomeView={this.switchToHomeView} switchToPlaylistView={this.switchToPlaylistView}/>
    })
  }

  switchToSearchView = () => {
    this.setState({
      view: <SearchView switchToHomeView={this.switchToHomeView} switchToLibraryView={this.switchToLibraryView} />
    })
  }

  render() {
      return (<div className="app">
      {this.state.view}
      </div>
    );
  }
}
