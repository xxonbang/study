<<<<<<< HEAD
import React, { Component } from 'react';
=======
import React from 'react';
>>>>>>> master
import './App.css';

import Movie from './Movie'

<<<<<<< HEAD
class App extends Component {

  state = {

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "end game",
            poster: "https://images-na.ssl-images-amazon.com/images/I/81mIV6aiWUL._SL1500_.jpg"
          },
          {
            title: "old boy",
            poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
          },
          {
            title: "iron man",
            poster: "https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG"
          },
          {
            title: "captin amercia",
            poster: "https://images-na.ssl-images-amazon.com/images/I/81slGaisBhL._SL1500_.jpg"
          },
          {
            title: "transformer",
            poster: "https://cdn.vox-cdn.com/thumbor/UPo4ENZ-p48hzifL8kTLcUhD3B8=/0x0:2662x1369/920x613/filters:focal(982x579:1406x1003):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/58721161/optimus.0.jpg"
          }
        ]
      })
    }, 3000)
  }  

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
=======
const movieTitles = [
  "end game",
  "old boy",
  "iron man",
  "captin amercia"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/81mIV6aiWUL._SL1500_.jpg",
  "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg",
  "https://upload.wikimedia.org/wikipedia/en/7/70/Ironmanposter.JPG",
  "https://images-na.ssl-images-amazon.com/images/I/81slGaisBhL._SL1500_.jpg"
]

function App() {
  return (
    <div className="App">
      <Movie title={movieTitles[0]} poster={movieImages[0]} />
      <Movie title={movieTitles[1]} poster={movieImages[1]} />
      <Movie title={movieTitles[2]} poster={movieImages[2]} />
      <Movie title={movieTitles[3]} poster={movieImages[3]} />
    </div>
  );
>>>>>>> master
}

export default App;
