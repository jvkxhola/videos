import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {

  console.log(props.videos);

  const renderedList = props.videos.map(video => {
    return (
        <VideoItem key={video.id.videoId} video={video} onSelect={props.onSelect} />
    )
  })

  return(
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )

}

export default VideoList;