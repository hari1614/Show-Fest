// ShowSummary.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const Summary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
    .then(response => response.json())
    .then(data => setShow(data))
    .catch(error => console.error('Loading:', error));
  
  }, [id]);

  if (!show) {
    return  <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{show.name}</h2>
      <p>{show.summary}</p>

    </div>
  );
}; 

export default Summary;


















/*const Summary  = () => {

    


    return ( 




        <div>
            <h1>{Show.summary}</h1>

        </div>
     );
}
 
export default Summary;
*/