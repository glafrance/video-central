import React, { Component } from "react";

import "./VideoDisplay.css";

class VideoDisplay extends Component {
  render() {
    return (
      <div className="video-display">
        <iframe className="video-iframe" 
          src={`https://www.youtube.com/embed/${this.props.id}`} 
          title="YouTube video player" frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>          
        </iframe>
        <h4 className="title">{this.props.title}</h4>
        <p className="description">{this.props.description}</p>
      </div>
    );  
  }
};

export default VideoDisplay;