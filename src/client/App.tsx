import React, { Component } from 'react';
import MainButtons from './components/MainButtons';
import DisplayScreen from './components/DisplayScreen';
import './styles/app.css';

const defaultPlaylist = [
{
  id: "Orchestral",
  title: "The Lay of the Last Minstrel",
  artist: "Hamish MacCunn",
  type: "mp3",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/7a/The_lay_of_the_last_minstrel_-_by_Sir_Walter_Scott%2C_Illustrated_by_James_Henry_Nixon.png"
},
{
  id: "Chamber",
  title: "String Quartet No 14 in D minor",
  artist: "Franz Schubert",
  type: "mp3",
  image: "https://cps-static.rovicorp.com/3/JPG_400/MI0000/996/MI0000996485.jpg?partner=allrovi.com"
},
{
  id: "Instrumental",
  title: "Piano Sonata in D major",
  artist: "Muzio Clementi",
  type: "mp3",
  image: "https://1.bp.blogspot.com/-1ig2mKZyknk/Xa0fZ2ng5ZI/AAAAAAAATaY/5avcAweXe3MazUTBt_9GeF3o7I2XStlVACNcBGAsYHQ/s1600/cover.jpg"
},
{
  id: "Choral",
  title: "Videns Dominus",
  artist: "Jacobus Vaet",
  type: "mp3",
  image: "https://blob.cede.ch/catalog/100740000/100740517_2_92.jpg?v=1"
},
{
  id: "Vocal",
  title: "The Lost Chord",
  artist: "Arthur Sullivan",
  type: "mp3",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/LostChord_sm.jpg"
}
];

export default class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      playlist: defaultPlaylist,
      position: 0,
    }
  }

  nextSong = () => {
    let currentPosition = this.state.position, newPosition;
    
    if (currentPosition === this.state.playlist.length - 1) {
      newPosition = 0;
    } else {
      newPosition = ++currentPosition;
    }

    this.setState({
      position: newPosition
    })
  }

  previousSong = () => {
    let currentPosition = this.state.position, newPosition;
    
    if (currentPosition === 0) {
      newPosition =  this.state.playlist.length - 1;
    } else {
      newPosition = --currentPosition;
    }

    this.setState({
      position: newPosition
    })
  }

  randomSong = () => {
    let currentPosition = this.state.position, newPosition;

    do {
      newPosition =  Math.floor(Math.random()*this.state.playlist.length)
    } while (newPosition === currentPosition);

    this.setState({
      position: newPosition
    })
  }

  render() {
    return (<div className="app">
      <DisplayScreen selection={this.state.playlist[this.state.position]} playlistPosition={this.state.position + 1} playlistSize={this.state.playlist.length}/>
      <MainButtons nextSong={this.nextSong} previousSong={this.previousSong} randomSong={this.randomSong}/>
      </div>
    );
  }
}
