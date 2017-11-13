import React, { Component } from 'react';
import request from 'request';

class DisplayMovie extends Component {
    state = {
        data: []
    }
    componentWillReceiveProps(nextProps) {
        request(``)
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default DisplayMovie;