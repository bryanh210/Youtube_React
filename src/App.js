// assign 'react' to variable React
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/searchbar.js';

const API_KEY = 'secret_chain';


// AJAX

class App extends Component{
  state ={
    videos: []
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


ComponentDidMount(){
  YTSearch({key: API_KEY, term: 'rock'}, (videos) => {
       console.log(videos);
       this.setState({
         // same as videos: videos
         videos
        });
     });
}


  render(){
    return(
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    )
  }
}




export default App;
