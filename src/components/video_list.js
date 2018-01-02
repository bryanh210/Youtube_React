import React, {Component} from 'react';
import VideoListItem from './video_list_items'


class VideoList extends Component{

  // const { videos } = this.props;
  render(){
    const { videos, onVideoSelect} = this.props
    const videoItems = videos.map((video) =>{
      return <VideoListItem
        onVideoSelect={onVideoSelect}
        video={video}
        key ={video.etag}
      />
    })

    return(
        <ul className="col-md-4 group">
          {videoItems}
        </ul>
          )
    }


}

export default VideoList;
