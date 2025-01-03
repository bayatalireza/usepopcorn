import React, { useEffect, useRef, useState } from "react";
import StarRating from "../../starRating/StarRating";

export default function MoveDetails({
  selectedId,
  onCloseMovie,
  KEY,
  onAddWatched,
  watched
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userRating, setUserRating] = useState("");
  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;



  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
    imdbID: imdbID,
  } = movie;

  const countRef = useRef(0);

  useEffect(()=>{
    if(userRating){
      countRef.current = countRef.current + 1;
      
    }
  }, [userRating])

  useEffect(() => {
    async function getMovieDetails() {
      try {
        setIsLoading(true);

        
        // Fetch movie details from API here
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        const data = await res.json();

        setMovie(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    getMovieDetails();
  }, [selectedId]);

  function handleAdd() {
    const newWatchedMovie = {
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      imdbID: imdbID,
      countRatingDecisions: countRef.current,
    };
    // console.log(newWatchedMovie);
    
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(()=>{
    if(!title) return;
    document.title = title;

    return function(){
      document.title = "Use Popcorn";
      
    }
  }, [title])

  return (
    <div className="details">
      {error && <div className="error">{error}</div>}
      {!error && (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie} Movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>Genre: {genre}</p>
              <p>
                <span>⭐️</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    starNum={10}
                    Size={18}
                    onUserRating={setUserRating}
                  />

                  {userRating && (
                    <button className="btn-add" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <div className="watched">
                  You have already watched this movie and add    {watchedUserRating} Rating
                </div>
              )}
            </div>
            <h3>Plot</h3>
            <p>{plot}</p>
            <h3>Actors</h3>
            <p>{actors}</p>
            <h3>Director</h3>
            <p>{director}</p>
          </section>
        </>
      )}
    </div>
  );
}
