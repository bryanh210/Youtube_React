// assign 'react' to variable React
import React, {Component} from 'react';
import _ from 'lodash';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/searchbar.js';
import VideoDetail from './components/video_details'

const API_KEY = '';


// AJAX

class App extends Component{
  state ={
    videos: [],
    selectedVideo: null
  };



componentDidMount(){
    YTSearch({key: API_KEY, term: ''}, (videos) => {
         console.log(videos);
         this.setState({
           // same as videos: videos
           videos: videos,
           selectedVideo: videos[0]
          });
       });
}


videoSearch(term){
  YTSearch({key: API_KEY, term: term}, (videos) => {
       console.log(videos);
       this.setState({
         // same as videos: videos
         videos: videos,
         selectedVideo: videos[0]
        });
     });
}

  render(){
    // calls the function once every 300 milliseconds
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
    return(
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}




export default App;
