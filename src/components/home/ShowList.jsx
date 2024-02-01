const ShowList = (props) => {
    const shows = props.shows;
    const history = props.history;

    return ( 

        <div className="box">
        {shows.map(show => (
            <div key={show.show.id} className="child">
                <h2>{show.show.name}</h2>
                <img src={show.show.image?.medium || 'No image available'} alt={show.show.name} />
                <p>Language: {show.show.language}</p>
                <p>Genres: {show.show.genres.join(', ')}</p>
                <p style={{display:'none'}} id="sum">{show.show.summary}</p>
                <p>Rating: {show.show.rating.average || 'Not rated'}</p>
                <button onClick={() =>history(show.show.id)}>Show Summary</button>
              
            </div>
        ))}

        <footer>Made by Hariharan</footer>
    </div>


     );
}
 
export default ShowList;