import React, { Component } from "react";

import "./SearchBar.css";

class SearchBar extends Component {
  state = { term: "" };

  onFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.findVideos(this.state.term);
    this.setState({ term: "" });
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input 
              type="text" 
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );  
  }
};

export default SearchBar;