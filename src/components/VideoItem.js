import './VideoItem.css'
import React from 'react';

const VideoItem = (props) => {

  console.log(props.video);


  return (
    <div className="video-item item" onClick={() => props.onSelect(props.video)}>
      <img alt={props.video.snippet.title} src={props.video.snippet.thumbnails.medium.url} className="ui image" />
        <div className="content ">
          <div className="header">
            {props.video.snippet.title}
          </div>
        </div>
    </div>

  )

}

export default VideoItem;