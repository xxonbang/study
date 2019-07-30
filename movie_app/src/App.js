import React from 'react';
import './App.css';

import Movie from './Movie'

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
}

export default App;
