import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

function Api_App() {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&api_key=4ae47a0d2ad213839e57a67d3f92c791')
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, []); // Empty dependency array ensures useEffect runs once on mount

  return (
    <div>
      {movies.length > 0 ? (
        <CallMovies movies={movies} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

function CallMovies({ movies }) {
    let titles = [];
    let posters = [];
    let id =[];

// Assuming movies is an array of movie objects

for (let i = 0; i < movies.length; i++) {
    titles.push(movies[i].title);
    id.push(movies[i].id)
    posters.push("https://image.tmdb.org/t/p/original/" + movies[i].poster_path);
    
}
// console.log(people);
// Combine titles and posters into a 2D array

let combinedArray = [];

for (let i = 0; i < titles.length; i++) {
    combinedArray.push([titles[i], posters[i], id[i]]);
}


  let casterlester;
  return (
    <div id="body">
      {combinedArray.map((item, key) => 
      <div class="item">
        <Link to={`./detail?id=${item[2]}`} >
          <p class="link-text" key={key}>{item[0]}</p>
          <img width="150" src={item[1]}></img><br />
        </Link>
      </div>)}
    </div>
  );
}

export default Api_App;