import React, { useState, useEffect } from 'react';

function Movies (requestType ){
    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${requestType ?? "upcoming"}?language=en-US&page=1&api_key=4ae47a0d2ad213839e57a67d3f92c791`)
        .then(response => response.json())
        .then(response => {
            console.log(response)
        })
        .catch(err => console.error(err));
    })
}

export default Movies