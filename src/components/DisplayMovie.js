import React, { Component } from 'react';
import request from 'request';

import MovieCard from './MovieCard';
// api key = http://www.omdbapi.com/?i=tt3896198&apikey=76258e56

class DisplayMovie extends Component {
   constructor(props) {
       super(props);
       this.state = {
           data: ''
       }
   }
    componentWillReceiveProps(nextProps) {
  
    }
    
    render() {
        return (
            <div className="display-movies">
                
            </div>
        );
    }
}

export default DisplayMovie;