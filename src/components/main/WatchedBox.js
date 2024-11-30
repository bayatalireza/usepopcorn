import { useState } from "react";
import WatchSummary from "./watch/WatchSummary";
import WatchedMoviesList from "./watch/WatchedMoviesList";



export default function WatchBox({ tempWatchedData }) {
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
