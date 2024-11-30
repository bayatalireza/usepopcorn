import React from "react";

export default function WatchedMoviesList({watched}) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <li>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />

            <div className="">
              <p>
                <span>⭐️</span>
                <span>{movie.imdbRating}</span>
              </p>
              <p>
                <span>🌟</span>
                <span>{movie.userRating}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{movie.runtime} min</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
