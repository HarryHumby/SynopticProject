import React, { Component } from 'react';
import DisplayScreen from '../components/DisplayScreen';
import MainButtons from '../components/MainButtons';
import {DragDropContext, DropResult} from 'react-beautiful-dnd';
import Column from '../components/Column';
import AudioFiles from '../services/AudioFiles';
import Playlists from '../services/Playlists';

export default class CreatePlaylistView extends Component {

  constructor(props) {
    super(props);

    this.onDragEnd = this.onDragEnd.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.updatePlaylistTitle = this.updatePlaylistTitle.bind(this);

    this.state = {
      playlistTitle: "",
      columns: {
        Playlist: {
          id: 'Playlist',
          name: 'Playlist:',
          list: []
        },
        AllSongs: {
          id: 'AllSongs',
          name: 'Add Songs:',
          list: ['item 1', 'item 2', 'item 3']
        }
      }
    }
  }

  sortAudioFiles(audioFiles, orderBy) {
    return audioFiles.sort((a, b) => {
      if(a[orderBy] < b[orderBy]) { return -1; }
      if(a[orderBy] > b[orderBy]) { return 1; }
      return 0;
    });
  }

  componentDidMount() {
    AudioFiles.listMusic(this.props.search)
      .then((audioFiles) => {
        let newColumns = this.state.columns;
        newColumns.AllSongs.list = this.sortAudioFiles(audioFiles, "title");

        this.setState({
          columns: newColumns
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    // Set start and end variables
    const start = this.state.columns[source.droppableId]
    const end = this.state.columns[destination.droppableId]

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      const newList = start.list.filter((_, idx) => {
        return idx !== source.index
      })

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index])

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        name: start.name,
        list: newList
      }

      // Update the state
      let newColumns = this.state.columns;
      newColumns[newCol.id] = newCol;

      this.setState({
        columns: newColumns
      })
      return null
    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => {
        return idx !== source.index
      })

      // Create a new start column
      const newStartCol = {
        id: start.id,
        name: start.name,
        list: newStartList
      }

      // Make a new end list array
      const newEndList = end.list

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index])

      // Create a new end column
      const newEndCol = {
        id: end.id,
        name: end.name,
        list: newEndList
      }

      // Update the state
      let newColumns = this.state.columns;
      newColumns[newStartCol.id] = newStartCol;
      newColumns[newEndCol.id] = newEndCol;

      this.setState({
        columns: newColumns
      })
     
      return null
    }
  }

  savePlaylist() {
    Playlists.createPlaylist({title: this.state.playlistTitle, collection: this.state.columns.Playlist.list})
      .then((res) => {
        this.props.switchToPlaylistListView();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  updatePlaylistTitle(event) {
    this.setState({
      playlistTitle: event.target.value
    })
  }

  render() {
    let displayScreenRender = [<div className="playlist-main-menu">
      <input className="playlist-name-input" type="text" placeholder="Title..." value={this.state.playlistTitle} onChange={this.updatePlaylistTitle}></input>
      <button className="playlist-save" title="Save" onClick={this.savePlaylist}><i class="fa fa-save"></i></button>
    </div>,
    <DragDropContext onDragEnd={this.onDragEnd}>
      <div className="list-holder">
        {Object.values(this.state.columns).map(col => (
          <Column col={col} key={col.id} />
        ))}
      </div>
    </DragDropContext>];

    return (<div className="create-playlist-view">
      <DisplayScreen renderView={displayScreenRender} />
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}
