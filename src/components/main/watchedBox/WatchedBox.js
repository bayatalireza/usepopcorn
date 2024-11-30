import { useState } from "react";
import WatchSummary from "./watchSummery/WatchSummary";
import WatchedMoviesList from "./watchedMovies/WatchedMoviesList";

export default function WatchedBox({ tempWatchedData }) {
  const [isOpen2, setIsOpen2] = useState(true);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen2((open) => !open)}
        >
          {isOpen2 ? "-" : "+"}
        </button>

        {isOpen2 && (
          <>
            <WatchSummary watched={watched} />
            <WatchedMoviesList watched={watched} />
          </>
        )}
      </div>
    </>
  );
}
