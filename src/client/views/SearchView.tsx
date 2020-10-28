import React, { Component } from 'react';
import DisplayScreen from '../components/DisplayScreen';
import MainButtons from '../components/MainButtons';

export default class SearchView extends Component {
  
  constructor(props) {
    super(props);

    this.handleSearch = this.handleSearch.bind(this);
    this.updateUserSearch = this.updateUserSearch.bind(this);

    this.state = {
      search: ""
    }
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.switchToLibraryView(this.state.search);
  }

  updateUserSearch(event) {
    this.setState({search: event.target.value});
  }

  render() {
    let displayScreenRender = <form onSubmit={this.handleSearch}>
      <label>
        <input className="search-input" type="text" value={this.state.search} onChange={this.updateUserSearch} />
      </label>
      <button className="search-submit" type="submit"><i class="fa fa-search"></i></button>
    </form>

    return (<div className="search-view">
      <DisplayScreen renderView={displayScreenRender} />
      <MainButtons disabled={true} switchToHomeView={this.props.switchToHomeView}/>
      </div>
    );
  }
}
