import React, { Component } from 'react';
import '../styles/components/SwitchOrderButton.css';

export default class SwitchOrderButton extends Component {

  constructor(props) {
    super(props);

    this.handleSwitchOrder = this.handleSwitchOrder.bind(this);
  }
  
  handleSwitchOrder() {
    document.getElementById("switch-order-notif").style.display= "block";
    setTimeout(() => {
      document.getElementById("switch-order-notif").style.display= "none";
    }, 800)
    this.props.switchOrderBy();
  }

  render() {
    return (<div className="switch-order-button-holder">
      <button className="switch-order-button" onClick={this.handleSwitchOrder}><i class="fa fa-sort"></i></button>
      <h3 id="switch-order-notif" className="switch-order-notif">{this.props.currentOrder}</h3>
    </div>
    );
  }
}