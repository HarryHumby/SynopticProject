import React, { Component } from 'react';
import DisplayScreen from '../components/DisplayScreen';
import MainButtons from '../components/MainButtons';
import AudioFiles from '../services/AudioFiles';

export default class LibraryView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      audioFiles: []
    }
  }

  componentDidMount() {
    AudioFiles.listMusic()
      .then((audioFiles) => {
        this.setState({
          audioFiles: audioFiles
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (<div className="library-view">
      <DisplayScreen view={"library"} audioFiles={this.state.audioFiles} switchToPlaylistView={this.props.switchToPlaylistView}/>
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}
