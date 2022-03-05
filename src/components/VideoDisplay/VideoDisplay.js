import React, { Component } from "react";

import "./VideoDisplay.css";

class VideoDisplay extends Component {
  render() {
    return (
      <div className="video-display">
        <iframe className="video-iframe" 
          src={`https://www.youtube.com/embed/${this.props.videoId}`} 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>          
        </iframe>
        <p className="description">{this.props.description}</p>
      </div>
    );  
  }
};

export default VideoDisplay;