"use client";

import HerosectionVideo from "@/components/HerosectionVideo";
import MovieList from "@/components/MovieList";
import ShowList from "@/components/ShowList";
import { useState, useEffect } from "react";
import { use } from "react";

export default function CategoryMovie({ params: paramsPromise }) {
  const params = use(paramsPromise); // Unwrap the Promise
  const genre = params.genre;

  const [movies, setMovies] = useState([]); // Initialize state for movies
  const [firstMovie, setFirstMovie] = useState(null); // Initialize firstMovie as null

  useEffect(() => {
    fetch("/movies.json")
      .then((response) => response.json())
      .then((data) => {
        const filteredMovies = data.filter((movie) => movie.category === genre);
        setMovies(filteredMovies);
        if (filteredMovies.length > 0) {
          setFirstMovie(filteredMovies[0]); // Set the first movie
        }
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [genre]);

  return (
    <div>
      {firstMovie && (
        <HerosectionVideo
          movieId={firstMovie.id}
          overview={firstMovie.overview}
          title={firstMovie.title}
          imageString={firstMovie.imageString}
          videoSource={firstMovie.videoSource}
        />
      )}
      {/* {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      ))} */}
      <ShowList category={genre} subcategory="comedy" title="Comedy Shows" />
      <ShowList category={genre} subcategory="crime" title="Crime Shows" />
    </div>
  );
}
