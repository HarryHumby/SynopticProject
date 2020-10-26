import React, { Component } from 'react';
import MainButtons from './components/MainButtons';
import DisplayScreen from './components/DisplayScreen';
import './styles/app.css';

export default class App extends Component {
  
  componentDidMount() {
    this.state = {
      playlist: "default",
      position: 0,
    }
  }

  render() {
    return (<div className="app">
      <DisplayScreen />
      <MainButtons />
      </div>
    );
  }
}
