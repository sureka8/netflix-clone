"use client"
import { useEffect, useState } from "react";
import { use } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
export default function MoviePlayer({ params: paramsPromise }){
     const params = use(paramsPromise); // Unwrap the Promise
      const Id = params.movieId;
      console.log(Id);
      
     const [movies, setMovies] = useState([]);
    
      useEffect(() => {
        // Fetch movies from the JSON file
        fetch("/movies.json") // Adjust the path based on your project structure
          .then((response) => response.json())
          .then((data) => {
            // Filter movies by category
            const filteredMovies = data.find((movie) => movie.id == Id);
            setMovies(filteredMovies);
          })
          .catch((error) => console.error("Error fetching movies:", error));
      }, [Id]);
      console.log(movies);
      
    return(
        <div className="w-screen h-screen bg-black">
            <nav className="text-white fixed w-full gap-8 flex flex-row items-center bg-opacity-70 px-5 ">
                {/* <FaArrowLeftLong />
             {movies.title} */}
            </nav>
            <video
            autoPlay
            controls
            className="h-full w-full"
            src={movies.videoSource} />
        </div>
    )
}