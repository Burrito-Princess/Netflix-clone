import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Cast_api() {
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
    }, [])
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '/credits?language=en-US&api_key=4ae47a0d2ad213839e57a67d3f92c791')
            .then(response => response.json())
            .then(response => {
                setCast(response)

            })
            .catch(err => console.error(err));
    }, [])
    let poster = "https://image.tmdb.org/t/p/original/" + credit.poster_path;
    let backdrop = "https://image.tmdb.org/t/p/original/" + credit.backdrop_path;

    return (
        <div>
            <img class="backdrop" src={backdrop}></img>
            <div class="container">
                <div id="detail-body">
                    <a class="link-text button" href="./">back</a><br />
                    <div class="">
                    <div class="title">{credit.title}</div>
                    </div>
                    <br />
                    <img class="img" src={poster}></img>
                    <br />
                    <a class="link-text button" href={credit.homepage}>More Info</a>
                    <div class="overview">{credit.overview}</div>
                    <br />
                                        
                    {/* i know this is hard coded, but i couldn't find how to do a forloop in react */}
                    <div>
                        {cast.cast ? cast.cast[0].name : "false"}<br />
                        {cast.cast ? cast.cast[1].name : "false"}<br />
                        {cast.cast ? cast.cast[2].name : "false"}<br />
                        {cast.cast ? cast.cast[3].name : "false"}<br />
                        {cast.cast ? cast.cast[4].name : "false"}<br />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cast_api