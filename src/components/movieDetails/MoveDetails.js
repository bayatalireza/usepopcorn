import React, { useEffect, useState } from "react";
import StarRating from "../../starRating/StarRating";

export default function MoveDetails({ selectedId, onCloseMovie, KEY }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    Title: title,
    // Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

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
  return (
    <div className="details">
      {error && (
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
              <StarRating starNum={10} Size={24} />
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
