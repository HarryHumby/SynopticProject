import React, { Component } from 'react';
import DisplayScreen from '../components/DisplayScreen';
import MainButtons from '../components/MainButtons';

export default class HomeView extends Component {

  constructor(props) {
    super(props);

    this.handleHomeToLibraryClickEventFunction = this.handleHomeToLibraryClickEventFunction.bind(this);
  }

  handleHomeToLibraryClickEventFunction() {
    this.props.switchToLibraryView();
  }

  render() {
    let displayScreenRender = [<button className="all-songs" title="All Songs" onClick={this.handleHomeToLibraryClickEventFunction}><i className="fa fa-music"></i> All Songs</button>,
  <button className="my-playlists" title="My Playlists" onClick={this.props.switchToPlaylistListView}><i className="fa fa-list"></i> My Playlists</button>,
  <button className="search" title="Search" onClick={this.props.switchToSearchView}><i className="fa fa-search"></i> Search</button>];

    return (<div className="home-view">
      <DisplayScreen renderView={displayScreenRender} />
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}
