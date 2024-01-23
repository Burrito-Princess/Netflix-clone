import React, { useState, useEffect } from 'react';

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
    var people = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        
    ];

// Assuming movies is an array of movie objects

for (let i = 0; i < movies.length; i++) {
    titles.push(movies[i].title);
    posters.push("https://image.tmdb.org/t/p/original/" + movies[i].poster_path);
    fetch('https://api.themoviedb.org/3/movie/' + movies[i].id + '/credits?language=en-US&api_key=4ae47a0d2ad213839e57a67d3f92c791')
  .then(response => response.json())
  .then(response => { cast(response)
  })
  .catch(err => console.error(err));
    function cast(response){
      // console.log(response.length);
      
        for (let j =0; j < 5; j++){
           people[i].push(response.cast[j].name)
        }
    
    }
}
// console.log(people);
// Combine titles and posters into a 2D array

let combinedArray = [];

for (let i = 0; i < titles.length; i++) {
    combinedArray.push([titles[i], posters[i], people[i]]);
}


console.log(combinedArray);

  let casterlester;
  return (
    <div>
      {combinedArray.map((item, key) => <div>
        <li key={key}>{item[0]}</li>
        <li>{console.log(item[2])}</li>
      <img width="150" src={item[1]}></img>
      </div>)}
    </div>
  );
}

export default Api_App;