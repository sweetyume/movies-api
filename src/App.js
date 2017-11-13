import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayMovie from './components/DisplayMovie';
import InputSearch from './components/InputSearch';

class App extends Component {
  state = {
    movies: []
  }
  searchMovie = (title) => {
    this.setState({
      movie: title
    });
  }
  render() {
    return (
      <div className="App">
       <h1> Movies API </h1>
       <InputSearch func={this.searchMovie}/>
       <DisplayMovie func={this.state.movieTitle}/>
      </div>
    );
  }
}

export default App;
