import React, { Component } from 'react';
import '../styles/components/DisplayScreen.css';

export default class DisplayScreen extends Component {

  render() {
    return (<div className={`display-screen ${this.props.centreContentOnDisplay? "centered-content" : ""}`}>
      {this.props.renderView}
    </div>)
  }

}