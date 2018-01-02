import React, { Component } from 'react';

import ReactDOM from 'react-dom'


class SearchBar extends Component{

state ={
  term: ''
}

onInputChange(event){
  console.log(event.target.value)
}

  render(){
    return <input onChange = {this.onInputChange}/>
  }
}


export default SearchBar;
