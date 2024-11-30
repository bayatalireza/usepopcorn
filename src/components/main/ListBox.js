import { useState } from "react";

export default function ListBox({tempMovieData}) {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen1((open) => !open)}
        >
          {isOpen1 ? "-" : "+"}
        </button>
        {isOpen1 && (
          <ul className="list">
            {tempMovieData.map((movie) => (
              <li>
                <img src={movie.Poster} alt={`${movie.Title} poster`} />
                <h3>{movie.Title}</h3>
                <div className="">
                  <p>
                    <span>🗓</span>
                    <span>{movie.Year}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
