import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        return (
            <div className="MovieCard">
                <h3>{this.props.title}</h3>
                <h3>{this.props.actors}</h3>
            </div>
        );
    }
}

export default MovieCard;