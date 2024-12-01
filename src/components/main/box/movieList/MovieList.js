import Movie from "./movie/Movie";

export default function MovieList({ movies }) {
  return (
    <div>
      <ul className="list">
        {movies.map((movie) => (
          <Movie movie={movie} key={movie.imdbId} />
        ))}
      </ul>
    </div>
  );
}
