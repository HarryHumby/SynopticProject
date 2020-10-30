import React, { Component } from 'react';
import DisplayScreen from '../components/DisplayScreen';
import MainButtons from '../components/MainButtons';
import SwitchOrderButton from '../components/SwitchOrderButton';
import AudioFiles from '../services/AudioFiles';

export default class LibraryView extends Component {

  constructor(props) {
    super(props);

    this.handleLibraryClickEventFunction = this.handleLibraryClickEventFunction.bind(this);
    this.switchOrderBy = this.switchOrderBy.bind(this);
    
    this.state = {
      audioFiles: [],
      orderBy: "album"
    }
  }

  componentDidMount() {
    AudioFiles.listMusic(this.props.search)
      .then((audioFiles) => {
        this.setState({
          audioFiles: audioFiles
        })
        this.switchOrderBy();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleLibraryClickEventFunction(event) {
    this.props.switchToPlaylistView([this.state.audioFiles[event.target.id]]);
  }

  switchOrderBy() {
    let currentOrderBy = this.state.orderBy, newOrderBy;

    if (currentOrderBy === "title") {
      newOrderBy = "album";
    } else if (currentOrderBy === "album") {
      newOrderBy = "title";
    }

    this.setState({
      audioFiles: this.sortAudioFiles(this.state.audioFiles, newOrderBy),
      orderBy: newOrderBy
    })
  }

  sortAudioFiles(audioFiles, orderBy) {
    return audioFiles.sort((a, b) => {
      if(a[orderBy] < b[orderBy]) { return -1; }
      if(a[orderBy] > b[orderBy]) { return 1; }
      return 0;
    });
  }

  render() {
    let displayScreenRender, centreContentOnDisplay = false, switchOrderButton;

    if (this.state.audioFiles && this.state.audioFiles.length && this.state.audioFiles[0]) {
      displayScreenRender = this.state.audioFiles.map((audioFile, i) => {
        return <div id={i} className="library-audio-file" style={{backgroundImage: `url(${audioFile.image})`}} onClick={this.handleLibraryClickEventFunction}>
          <h1 className="song-title">{audioFile.title}</h1>
        </div>
      })
      switchOrderButton = <SwitchOrderButton switchOrderBy={this.switchOrderBy} currentOrder={this.state.orderBy}/>
    } else {
      displayScreenRender = <h1 className="no-songs-found">No songs found.</h1>
      centreContentOnDisplay = true;
    }

    return (<div className="library-view">
      {switchOrderButton}
      <DisplayScreen renderView={displayScreenRender} centreContentOnDisplay={centreContentOnDisplay} />
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}
