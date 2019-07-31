import React, { Component } from 'react';
<<<<<<< HEAD
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired
    }

=======
import './Movie.css';

class Movie extends Component {
>>>>>>> master
    render() {
        return (
            <div>
            <MoviePoster poster={this.props.poster} />
            <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends Component {
<<<<<<< HEAD

    static propTypes = {
        poster: PropTypes.string.isRequired
    }

=======
>>>>>>> master
    render() {
        return ( 
            <img src ={this.props.poster} />
        )
    }

}

<<<<<<< HEAD
export default Movie
=======
export default Movie;
>>>>>>> master
