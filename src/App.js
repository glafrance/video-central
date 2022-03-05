import React, { Component } from "react";

import './App.css';
import { getVideos } from "./youTubeService";
import SearchBar from './components/SearchBar/SearchBar';
import VideoUI from './components/VideoUI/VideoUI';

class App extends Component {
  state = { videos: [] };

  componentDidMount() {
    this.onSearchSubmit("beach");
  }

  onSearchSubmit = async (searchTerm) => {
    const videos = await getVideos(searchTerm);
    this.setState({ videos});
  }
  
  render() {
    return (
      <div className="ui container App">
        <h4 className="title">Video Search:</h4>
        <SearchBar findVideos={this.onSearchSubmit}/>
        <VideoUI videos={this.state.videos} />
      </div>
    );  
  }
}

export default App;
