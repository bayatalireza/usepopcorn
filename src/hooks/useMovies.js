import { useEffect, useState } from "react";

export function useMovies(query, callback) {
      const [movies, setMovies] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");
      const KEY = "4af40d5c";


        useEffect(
          function () {
            callback?.();
      
            const controller = new AbortController();
      
            async function fetchMovies() {
              try {
                setIsLoading(true);
                setError("");
                const res = await fetch(
                  `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,{signal: controller.signal}
                );
                if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      
                const data = await res.json();
                
                if (data.Response === "False") throw new Error("No movies found");
      
                setMovies(data.Search);
                setError("");
              } catch (err) {
                if(err.name !== "AbortError"){
      
                  setError(err.message);
                }
              } finally {
                setIsLoading(false);
              }
      
              if (query.length < 4) setMovies([]);
              setError("");
              return;
            }
      
            // handleCloseMovie()
            fetchMovies();
      
            return () => controller.abort();
          },
          [query]
        );

        return {movies, isLoading, error, KEY}
      
}
