import React from "react";
import StarRating from "../../../../../starRating/StarRating";

export default function Movie({ movie }) {
  return (
    <div>
      <li>
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
        />
        <h3>{movie.Title}</h3>
        <div className="">
          <p>
            <span>🗓</span>
            <span>{movie.Year}</span>
            <StarRating />
          </p>
        </div>
      </li>
    </div>
  );
}
