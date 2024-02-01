import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ShowList from './ShowList';
import Navbar from '../Navbar/Navbar';
import Style from './Style.css'



const Home = () => {
    const history = useNavigate();
    const [shows, setShows] = useState([]);
  
  
// Fetch details from api

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => setShows(data))
            .catch(error => console.error('Loading:', error));
    }, []);


// Redirect to summary

    const handleClick = (showId) => {
        window.location.href = `/summary:id/${showId}`;
    }; 

//Display the list of shows from api

    return (
    
        <div>
            <Navbar />
            <ShowList shows={shows} history={handleClick} />
        </div>

    );
}

export default Home;

