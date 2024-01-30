import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Cast_api(){
    const location = useLocation();
    const urlSearchParams = new URLSearchParams(location.search);
    const id = urlSearchParams.get('id');
    const [credit, setCredit] = useState([]);
    const [cast, setCast] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '?language=en-US&api_key=4ae47a0d2ad213839e57a67d3f92c791')
        .then(response => response.json())
        .then(response => { 
            setCredit(response)
            
        })
        .catch(err => console.error(err));  
},[])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?language=en-US&api_key=4ae47a0d2ad213839e57a67d3f92c791')
        .then(response => response.json())
        .then(response => { 
            setCast(response)
            
        })
        .catch(err => console.error(err));  
},[])
    // console.log(credit);
    // console.log(cast);
    let poster = "https://image.tmdb.org/t/p/original/" + credit.poster_path;
    // console.log(poster);
    let adult;
    if (credit.adult == true){
        let adult = "18+" 
    } else {
        let adult = "all ages"
    }
    return (
        <div>
            id: {id}
            <br />
            <img width="150" src={poster}></img>
            <br />
            <a href={credit.homepage}>Homepage</a>
            <br />
            From: {credit.production_countries ? credit.production_countries[0].name : "false"}
            <br />
            {cast.cast ? cast.cast[0].name : "false"}<br />
            {cast.cast ? cast.cast[1].name : "false"}<br />
            {cast.cast ? cast.cast[2].name : "false"}<br />
            {cast.cast ? cast.cast[3].name : "false"}<br />
            {cast.cast ? cast.cast[4].name : "false"}<br />
        </div>
    )
}

export default Cast_api