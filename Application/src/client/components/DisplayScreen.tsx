import React, { Component } from 'react';
import '../styles/components/DisplayScreen.css';

export default class DisplayScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      idle: false
    }
  }

  idle = setTimeout(() => {
    this.setState({
      idle: true
    })
  }, 30000);

  componentdidMount() {
    this.idle = setTimeout(() => {
      this.setState({
        idle: true
      })
    }, 30000);
  }

  render() {
      return (<div className={`display-screen ${this.props.centreContentOnDisplay? "centered-content" : ""}`}>
      {this.state.idle? null : this.props.renderView}
    </div>)
  }

}