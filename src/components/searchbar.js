import React, { Component } from 'react';

import ReactDOM from 'react-dom'


class SearchBar extends Component{

state ={
  term: ''
}


  render(){
    return <input onChange = {this.onInputChange}/>
  }
}


export default SearchBar;
