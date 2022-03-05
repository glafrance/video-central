import React, { Component } from "react";

import VideoDisplay from '../VideoDisplay/VideoDisplay';
import VideoList from "../VideoList/VideoList";
import "./VideoUI.css";

class VideoUI extends Component {
  state = { 
    selectedVideoId: "", 
    selectedVideoTitle: "",
    selectedVideoDescription: "",
    videos: [] 
  };

  constructor(props) {
    super(props);

    if (
      this.props.videos && 
      this.props.videos.data
    ) {
      const items = this.props.videos.data.items;

      this.setState({ 
        selectedVideoId: items[0].id.videoId, 
        selectedVideoTitle: items[0].snippet.channelTitle,
        selectedVideoDescription: items[0].snippet.description,
        videos: this.props.videos.data.items 
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.videos !== this.props.videos) {
      const items = this.props.videos.data.items;

      this.setState({ 
        selectedVideoId: items[0].id.videoId, 
        selectedVideoTitle: items[0].snippet.channelTitle,
        selectedVideoDescription: items[0].snippet.description,
        videos: this.props.videos.data.items 
      });
    }
  }

  onClickThumbnail = (videoId, videoTitle, videoDescription) => {
    this.setState({
      selectedVideoId: videoId, 
      selectedVideoTitle: videoTitle,
      selectedVideoDescription: videoDescription,
    });
  }

  render() {
    return (
      <div className="video-ui">
        <VideoDisplay 
          id={this.state.selectedVideoId}
          title={this.state.selectedVideoTitle} 
          description={this.state.selectedVideoDescription} 
        />
        <VideoList videos={this.state.videos} click={this.onClickThumbnail} />
      </div>
    );  
  }
};

export default VideoUI;