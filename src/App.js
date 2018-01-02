// assign 'react' to variable React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/searchbar.js';
import VideoDetail from './components/video_details'

const API_KEY = 'AIzaSyBtfo7BU-sKs3ob6PnaLpZmMP14GohWlTo';


// AJAX

class App extends Component{
  state ={
    videos: [],
    selectedVideo: null
  };


// load up the videos from data
// videoSearch(term) {
//     YTSearch({key: API_KEY, term: term}, (videos) => {
//       console.log(videos);
//       this.setState({
//         // same as videos: videos
//         videos
//        });
//     });
//   }


componentDidMount(){
  //sometimes the videos aren't loaded fast enough. That's why it could give error
  YTSearch({key: API_KEY, term: 'Kolor'}, (videos) => {
       console.log(videos);
       this.setState({
         // same as videos: videos
         videos: videos,
         selectedVideo: videos[0]
        });
     });
}



  render(){
    console.log(this.state.selectedVideo)
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    )
  }
}




export default App;
