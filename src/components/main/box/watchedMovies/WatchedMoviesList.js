import React from "react";

export default function WatchedMoviesList({watched,onDeleteWatched}) {
  return (
    <>
      <ul className="list">
        {watched.map((movie) => (
          <li key={movie.Title}>
            <img src={movie.poster} alt={`${movie.Title} poster`} />

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
              <button className='btn-delete' onClick={()=>onDeleteWatched(movie.imdbID)}>X</button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
