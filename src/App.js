import { useState, useEffect } from "react";
import NavBar from "./components/navBar/NavBar";
import Main from "./components/main/Main";
import Search from "./components/navBar/search/Search";
import NumResults from "./components/navBar/numResult/NumResults";
import Box from "./components/main/box/Box";
import WatchSummary from "./components/main/box/watchSummery/WatchSummary";
import MovieList from "./components/main/box/movieList/MovieList";
import WatchedMoviesList from "./components/main/box/watchedMovies/WatchedMoviesList";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/error/ErrorMessage";
import MoveDetails from "./components/movieDetails/MoveDetails";
import { useMovies } from "./hooks/useMovies";
import { useLocalStorageState } from "./hooks/useLocalStorageState";

const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    runtime: 148,
    imdbRating: 8.8,
    userRating: 10,
  },
  {
    imdbID: "tt0088763",
    Title: "Back to the Future",
    Year: "1985",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    runtime: 116,
    imdbRating: 8.5,
    userRating: 9,
  },
];



export default function App() {


  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const {movies, isLoading, error, KEY} = useMovies(query, handleCloseMovie)

  const [watched, setWatched] = useLocalStorageState([], "watched");


  
  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  }

  
  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
    // localStorage.setItem('watched', JSON.stringify([...watched, movie]))
  }
  
  function handleDeleteWatched(id){
    setWatched(watched => watched.filter(movie => movie.imdbID!== id))
    
  }
  
  function handleCloseMovie(){
    setSelectedId(null);
  }
  



  useEffect(()=>{
    function Callback(e){
      if(e.key === "Escape"){
        handleCloseMovie(); 
      }
    }
    document.addEventListener("keydown",  Callback);

    return function (){
      document.removeEventListener("keydown", Callback);
    }

  },[]);



  return (
    <div>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>
      <Main>
        <Box>
          {isLoading && <Loader />}

          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MoveDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              KEY={KEY}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchSummary watched={watched} />
              <WatchedMoviesList watched={watched} onDeleteWatched={handleDeleteWatched}/>
            </>
          )}
        </Box>
        {/* <Box props={<MovieList movies={movies} />} />
        <Box
          props={
            <>
              <WatchSummary watched={watched} />
              <WatchedMoviesList watched={watched} />
            </>
          }
        /> */}
      </Main>
    </div>
  );
}
