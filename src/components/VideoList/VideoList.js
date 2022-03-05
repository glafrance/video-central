import React from "react";

import "./VideoList.css";

const VideoList = (props) => {
  const thumbnails = [];

  if (props.videos && props.videos.map) {
    props.videos.map(v => {
      let thumb;
  
      if (v && v.snippet) {
        thumb = <img
                  onClick={() => props.click(v.id.videoId, v.snippet.channelTitle, v.snippet.description)} 
                  className="thumbnail"
                  key={v.id.videoId} 
                  src={v.snippet.thumbnails.default.url} />
        thumbnails.push(thumb);
      }
    });  
  }

  return (
    <div className="video-list">
      {thumbnails}
    </div>
  );
};

export default VideoList;