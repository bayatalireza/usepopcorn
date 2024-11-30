

const average = (arr) =>
      arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function WatchSummary({watched}) {


  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgTime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <div className="summary">
        <h2>MOVIES you WATCHED</h2>
        <div>
          <p>
            <span>#️⃣</span>
            <span>{watched.length} movies</span>
          </p>
          <p>
            <span>⭐️</span>
            <span>{avgImdbRating}</span>
          </p>
          <p>
            <span>🌟</span>
            <span>{avgUserRating}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{avgTime} min</span>
          </p>
        </div>
      </div>
    </>
  );
}
