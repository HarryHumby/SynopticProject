import React, { Component } from 'react';
import DisplayScreen from '../components/DisplayScreen';
import MainButtons from '../components/MainButtons';
import AudioFiles from '../services/AudioFiles';

export default class LibraryView extends Component {

  constructor(props) {
    super(props);

    this.handleLibraryClickEventFunction = this.handleLibraryClickEventFunction.bind(this);
    
    this.state = {
      audioFiles: []
    }
  }

  componentDidMount() {
    AudioFiles.listMusic(this.props.search)
      .then((audioFiles) => {
        this.setState({
          audioFiles: audioFiles
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleLibraryClickEventFunction(event) {
    this.props.switchToPlaylistView([this.state.audioFiles[event.target.id]]);
  }

  render() {
    let displayScreenRender, centreContentOnDisplay = false;

    if (this.state.audioFiles && this.state.audioFiles.length && this.state.audioFiles[0]) {
      displayScreenRender = this.state.audioFiles.map((audioFile, i) => {
        return <div id={i} className="library-audio-file" style={{backgroundImage: `url(${audioFile.image})`}} onClick={this.handleLibraryClickEventFunction}>
          <h1 className="song-title">{audioFile.title}</h1>
        </div>
      })
    } else {
      displayScreenRender = <h1 className="no-songs-found">No songs found.</h1>
      centreContentOnDisplay = true;
    }

    return (<div className="library-view">
      <DisplayScreen renderView={displayScreenRender} centreContentOnDisplay={centreContentOnDisplay} />
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}
