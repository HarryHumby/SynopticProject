import React, { Component } from 'react';
import DisplayScreen from '../components/DisplayScreen';
import MainButtons from '../components/MainButtons';

export default class HomeView extends Component {
  render() {
    return (<div className="home-view">
      <DisplayScreen view={"home"} switchToPlaylistListView={this.props.switchToPlaylistListView} switchToLibraryView={this.props.switchToLibraryView} />
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}
